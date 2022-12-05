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
const ProductCard = (props) => {
    //let item = props.item;
    let [modalOpen, setModalState] = React.useState(false);
    let toPostItem = () => setModalState(true)

    let [shoppingSidebarOpen, setShoppingSidebarOpen] = React.useState(false);

    let [time_left, setTimeLeft] = React.useState("24h 0m")
    
    let toAddItem = () => {
        console.log('setshoppingsidebaropen'); 
        //const { vendor_id, customer_id, quantity, product_id } = req.body;
        //console.log(props.item.vendor_id)
        console.log(props.item);

        const prod = {
            'vendor_id': props.item.vendor_id,
            'customer_id': parseInt(localStorage.getItem('curr_user_id')),
            'quantity': 1,
            'product_id': props.item.product_id,
            'name': props.item.name,
            'details': props.item.details,
            'date_added': props.item.date_added,
            'for_sale': props.item.for_sale,
            'vendor_quantity': props.item.quantity,
            'photo': props.item.photo,
            'product_type': props.item.product_type,
            'price': props.item.price,
            'image_url': props.item.image_url
              
        };
        
        fetch("http://localhost:3001/api/transaction", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(prod) }).then(data => {console.log(prod); console.log(data); });   
    }

    let toAcceptItem = item => () => {
        item.is_reserved = true;
        item.transaction_date = new Date();
        const url = "http://localhost:3001/api/transaction/update/"
        fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        window.location.reload(false)

    }

    let toRejectItem = item => () => {
        //Handle if the farmer rejects the item in which consumer must be alerted if the reserve request was rejected
        const url = "http://localhost:3001/api/transaction/" + item.transaction_id;
        fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        //window.location.reload(false)
        window.location.reload(false)

    }

    let toggleShoppingSidebar = () => {
        setShoppingSidebarOpen(!shoppingSidebarOpen)
    }

    return (
        <ThemeProvider data-testid="product-card" theme={theme}>
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
                        {props.editMode &&
                            <Box>
                                <Fab color="secondary" aria-label="edit" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16}}
                                onClick={toPostItem}>
                                    <EditIcon />
                                </Fab>

                                <Modal open={modalOpen} onClose={() => setModalState(false)} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Box sx={{
                                         position: 'relative',
                                         width: '1000px',
                                         height: '650px',
                                         bgcolor: 'background.paper',
                                         border: '2px solid #000',
                                         boxShadow: (theme) => theme.shadows[5],
                                         p: 4,
                                        }}>
                                            <FarmerPostItem initItem={props.item} setModalState={setModalState} editMode/> {/* Update to support editing mode */}
                                    </Box>
                                </Modal>
                            </Box>
                        }
                        {props.addMode &&
                            <Box>
                                <Fab color="primary" aria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16}}
                                onClick={toAddItem}>
                                    <AddIcon />
                                </Fab>
                                <ShoppingSidebar isOpen={shoppingSidebarOpen} toggle= {toggleShoppingSidebar} onClose={() => setShoppingSidebarOpen(false)}/>                   
                            </Box>
                        }

                        {props.reserveRequestMode &&
                            <Box>
                                <Fab color="primary" aria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                left: 16,
                                }}
                                onClick={toAcceptItem(props.item)}>
                                    <CheckIcon />
                                </Fab>

                                <Fab color="secondary" ria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16,
                                }}
                                onClick={toRejectItem(props.item)}>
                                    <CloseIcon />
                                </Fab>
                                <ShoppingSidebar isOpen={shoppingSidebarOpen} toggle= {toggleShoppingSidebar} onClose={() => setShoppingSidebarOpen(false)}/>
                                    
                                
                            </Box>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ProductCard;