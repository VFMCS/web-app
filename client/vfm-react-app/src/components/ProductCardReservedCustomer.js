import * as React from 'react' 
import {Button, ThemeProvider, CssBaseline, Typography, Paper, Card, CardContent, CardActionArea, CardMedia, Fab, Box, Modal} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import EditIcon from "@mui/icons-material/Edit"
import FarmerPostItem from './FarmerPostItem';
import AddIcon from '@mui/icons-material/Add';
import ShoppingSidebar from './sidebars/ShoppingSidebar';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import Review from './Review';
import { ProductionQuantityLimitsSharp, PropaneSharp } from '@mui/icons-material';

let reviewee = '';

// This is a component that displays important information about a product
const ProductCardReservedCustomer = (props) => {

    let [modalOpen, setModalState] = React.useState(false); 
    let [shoppingSidebarOpen, setShoppingSidebarOpen] = React.useState(false);
    let [time_left, setTimeLeft] = React.useState("24h 0m");
    let [is_completed, setIsCompleted] = React.useState(false);
    let [is_pending, setIsPending] = React.useState(false);
    const [farmer_name, setFarmerName] = React.useState("");

    let navigate = useNavigate();


    React.useEffect(() => {
        let curr_date = (new Date()).toString();
        let curr_date_full = new Date();
        let transaction_date = (props.item.transaction_date).toString();
        let transaction_date_full = new Date((props.item.transaction_date).toString());


        let curr_date_time = curr_date.substring(16,21);
        let transaction_date_time = transaction_date.substring(11,16);

        let curr_start_min = parseInt(curr_date_time.substring(0,2)) * 60 + parseInt(curr_date_time.substring(3,5));
        let transaction_start_min = ((parseInt(transaction_date_time.substring(0,2)) + 19) % 24) * 60 + parseInt(transaction_date_time.substring(3,5));

        let min_diff = curr_start_min - transaction_start_min;

        if(min_diff < 0){
            min_diff = 24 * 60 - (-1) * min_diff;
        }

        console.log("curr date full: " + curr_date_full);
        console.log("transaction date full: " + transaction_date_full);
        

        let time_diff = curr_date_full.getTime() - transaction_date_full.getTime();
        console.log("time_diff: " + parseInt(time_diff));

        if(time_diff >= (1000*60*60*24)){
            fetch("http://localhost:5001/api/transaction", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(props.item)}).then(data => console.log(data));

            setIsCompleted(true);
        }
        else{
            setIsPending(true);
        }


        let time_left = parseInt(((24*60 - min_diff) / 60)).toString() + "h " + ((24*60 - min_diff) % 60).toString() + "m";

        setTimeLeft(time_left);

        //get farmer's details
        let url = 'http://localhost:5001/curr-user-api/' + props.item.vendor_id;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {setFarmerName(data[0].first_name + " " + data[0].last_name)})
            .catch(err => console.error(err));
    }, []);

    let toFarmer = item => () => {
        localStorage.setItem('clicked-on-user-id', item.vendor_id);
        navigate('/farmer-profile');
    }

    let toAcceptItem = item => () => {
        item.is_reserved = true;
        item.transaction_date = new Date();
        const url = "http://localhost:5001/api/transaction/update/"
        fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => {console.log(data); window.location.reload();});
        navigate('/farmer-reserves');

    }

    let toRejectItem = item => () => {
        //Handle if the farmer rejects the item in which consumer must be alerted if the reserve request was rejected
        const url = "http://localhost:5001/api/transaction/" + item.transaction_id;
        fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        window.location.reload(false)

    }

    let toLeaveAReview = item => () => {
        //Handle if the farmer rejects the item in which consumer must be alerted if the reserve request was rejected
        console.log('review');
        reviewee = item.vendor_id;
        setModalState(true);

    }

    let toggleShoppingSidebar = () => {
        setShoppingSidebarOpen(!shoppingSidebarOpen)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 260 }}>
                <CardActionArea disableTouchRipple={true}>
                    <CardMedia
                    component="img"
                    height="220"
                    image={props.item.image_url}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography textAlign="left" gutterBottom variant="h5" component="div">
                            {props.item.name}
                        </Typography>
                        <Typography textAlign="left" gutterBottom variant="subtitle1" component="div">
                            {" $" + props.item.price + "/lb"}
                        </Typography>
                        <Typography textAlign="left" gutterBottom variant="subtitle1" component="div">
                            Reserve quantity: {props.item.quantity} lb
                        </Typography>

                        <Typography sx={{textDecoration: 'underline'}} marginTop={2} textAlign="left" variant="subtitle1" color="primary" onClick={toFarmer(props.item)}>
                            {farmer_name}
                        </Typography>

                        {props.isPending && 
                            props.item.is_reserved ?
                            <Typography textAlign="left" sx={{marginTop: 2}} gutterBottom variant="subtitle1" component="div" margin={0}>
                                Time remaining to pickup reserved item: {time_left} 
                            </Typography>
                            :
                            <Typography textAlign="left" color="secondary" sx={{marginTop: 2}} gutterBottom variant="subtitle1" component="div">
                                Pending Approval
                            </Typography>
                        }
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};

export { reviewee };
export default ProductCardReservedCustomer;