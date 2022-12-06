import * as React from 'react' 
import {ThemeProvider, CssBaseline, Typography, Paper, Card, CardContent, CardActionArea, CardMedia, Fab, Box, Modal} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import EditIcon from "@mui/icons-material/Edit"
import FarmerPostItem from './FarmerPostItem';
import AddIcon from '@mui/icons-material/Add';
import ShoppingSidebar from './sidebars/ShoppingSidebar';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';


// This is a component that displays important information about a product
const ProductCardReserved = (props) => {
    //let item = props.item;
    let [modalOpen, setModalState] = React.useState(false);

    let [shoppingSidebarOpen, setShoppingSidebarOpen] = React.useState(false);

    let [time_left, setTimeLeft] = React.useState("24h 0m")

    React.useEffect(() => {
        
        let curr_date = (new Date()).toString();
        let transaction_date = (props.item.transaction_date).toString();
        let curr_date_time = curr_date.substring(16,21);
        let transaction_date_time = transaction_date.substring(11,16);

        let curr_start_min = parseInt(curr_date_time.substring(0,2)) * 60 + parseInt(curr_date_time.substring(3,5));
        let transaction_start_min = parseInt(transaction_date_time.substring(0,2)) * 60 + parseInt(transaction_date_time.substring(3,5));

        let min_diff = curr_start_min - transaction_start_min;

        if(min_diff < 0){
            min_diff = 24 * 60 - (-1) * min_diff;
        }

        let time_left = parseInt(((24*60 - min_diff) / 60)).toString() + "h " + ((24*60 - min_diff) % 60).toString() + "m";

        
 
        /*
        let hour_diff = parseInt(curr_date_time.substring(0,2)) - parseInt(transaction_date_time.substring(0,2))

        if(hour_diff < 0){
            hour_diff = 24 - (-1)*(hour_diff);
        }
        */

        console.log("curr date: " + curr_date);
        console.log("transaction date: " + transaction_date);
        console.log("curr_date_time: " + curr_date_time);
        console.log("transaction_date_time: " + transaction_date_time);

        /*
        console.log("curr hours: " + parseInt(curr_date_time.substring(0,2)));
        console.log("transaction hours: " + parseInt(transaction_date_time.substring(0,2)));
        console.log("curr mins: " + parseInt(curr_date_time.substring(3,5)));
        console.log("transaction mins: " + parseInt(transaction_date_time.substring(3,5)));
        console.log("curr_start_min: " + curr_start_min);
        console.log("transaction_start_min: " + transaction_start_min);
        //console.log("min_diff: " + (parseInt(curr_date_time.substring(3,5)) - parseInt(transaction_date_time.substring(3,5))));
        

        //let completete_min_diff = hour_diff * 60 + (parseInt(curr_date_time.substring(3,5)) - parseInt(transaction_date_time.substring(3,5)))
        //console.log("complete_min_diff: " + completete_min_diff);
        
        //let min_diff = curr_start_min - transaction_start_min;
        console.log("complete_min_diff: " + min_diff);
        */

        setTimeLeft(time_left);
    }, []);


    let toggleShoppingSidebar = () => {
        setShoppingSidebarOpen(!shoppingSidebarOpen)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea disableTouchRipple={props.editMode}>
                    <CardMedia
                    component="img"
                    height="220"
                    image={props.item.image_url}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div" >
                            {props.item.details}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={1}>
                            {" $" + props.item.price + "/item"}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={-1}>
                            {props.item.quantity} in Stock
                        </Typography>

                        <Typography sx={{marginTop: 2}} gutterBottom variant="subtitle1" component="div" margin={-1}>
                            Time remaining to pickup reserved item: {time_left} 
                        </Typography>

                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ProductCardReserved;