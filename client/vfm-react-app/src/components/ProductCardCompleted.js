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
const ProductCardCompleted = (props) => {
    //let item = props.item;
    let [modalOpen, setModalState] = React.useState(false);
    let [shoppingSidebarOpen, setShoppingSidebarOpen] = React.useState(false);
    let [time_left, setTimeLeft] = React.useState("24h 0m");
    let [is_completed, setIsCompleted] = React.useState(false);
    let [is_pending, setIsPending] = React.useState(false);
    const [farmer_name, setFarmerName] = React.useState("");

    let navigate = useNavigate();

    let toLeaveAReview = item => () => {
        //Handle if the farmer rejects the item in which consumer must be alerted if the reserve request was rejected
        console.log('review');
        reviewee = item.vendor_id;
        setModalState(true);

    }

    let toFarmer = item => () => {
        localStorage.setItem('clicked-on-user-id', item.vendor_id);
        navigate('/farmer-profile');
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

                        {props.isCustomer &&
                            <Typography sx={{textDecoration: 'underline'}} marginTop={2} textAlign="left" variant="subtitle1" color="primary" onClick={toFarmer(props.item)}>
                                {farmer_name}
                            </Typography>
                        }

                        {props.isCustomer &&
                            <Button  alignItems="left" onClick={toLeaveAReview(props.item)} sx={{ marginTop: 0, bgcolor: "transparent", fontWeight: "bold"}}>
                                Leave a Review
                            </Button>
                        }

                            <Modal open={modalOpen} onClose={() => setModalState(false)} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Box sx={{
                                    position: 'relative',
                                    width: '1000px',
                                    height: '400px',
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: (theme) => theme.shadows[5],
                                    p: 4,
                                    }}>
                                    <Review setModalState={setModalState} />
                                </Box>
                            </Modal>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};

export { reviewee };
export default ProductCardCompleted;