import * as React from 'react' 
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import theme from "../../theme/theme"
import { useNavigate } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ProductCard from '../ProductCard.js';
import {ThemeProvider, CssBaseline, Typography, Paper, Card, CardContent, CardActionArea, CardMedia, Fab, Modal} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit"
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import TextField from '@mui/material/TextField';
import FarmerPostItem from '../FarmerPostItem';
import { EventRepeat } from '@mui/icons-material';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ShoppingSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    let toHome = () => {
        localStorage.setItem('curr_user_id', JSON.stringify(-1));
        navigate("/")
    }

    let [transactions, setTransactions] = React.useState([]) // capture data from GET request

    const [quantity, setQuantity] = React.useState(1);


    let toMakeCart = () => {
        let url = 'http://localhost:3001/api/transaction/cart/' + localStorage.getItem('curr_user_id');
        //console.log(url);
        fetch(url).then(response => response.json()).then(data => {console.log("transaction product_id: " + data[0].product_id); console.log("transaction: " + JSON.stringify(data[0])); setTransactions(data);})
          .catch(err => console.error(err));
        
        /*
        transactions.forEach((item) => {
            url = 'http://localhost:3001/api/products/product/' + item.product_id;
            console.log(url);
            fetch(url).then(response => response.json()).then(data => {products.push(data[0]); console.log("product data: " + JSON.stringify(data[0]));})
                .catch(err => console.error(err));

        });
        */        
    }

    React.useEffect(() => {
        toMakeCart();
    }, [isOpen])

    let updateQuantity = transaction => (event) => {

        console.log("curr_transaction: " + transaction.transaction_id);
        transaction.quantity = event.target.value;
        console.log("quantity: " + event.target.value);
        
         
        /*
        //console.log("item: " + JSON.stringify(item));
        let url = 'http://localhost:3001/api/update/';
        if(event.target.value !== '' || event.target.value > 0){
            console.log("transaction: " + JSON.stringify(transaction));
            fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(transaction) }).then(data => {console.log(data); });
        }
        else{
            fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(transaction) }).then(data => {console.log(data); });
        }
        */

        

    }


    let counter = 0;

    return (
        <Drawer anchor = 'right' open={isOpen} onClose={toggle}>
            <Box
                sx={{ width: 500 }}
                role="presentation"   
            >   
                <List>
                    {transactions.map((item) => (
                        <ListItem key={item.product_id} sx = {{marginBottom: '20'}}>
                            <Card sx={{display: 'flex' }}>
                           
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 151}}

                                image={item.image_url}
                                alt="Product Image"
                            />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.name}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div" margin={1}>
                                            {" $" + item.price + "/item"}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div" margin={-1}>
                                            {item.vendor_quantity} in Stock
                                        </Typography>
                                        
                                    </CardContent>
                                </Box>
                                <TextField 
                                    id="outlined-quantityText"
                                    type="number"
                                    label="quantity"
                                    defaultValue={item.quantity}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    sx={{marginTop: '10'}}
                                    onChange={updateQuantity(item)}
                                />          
                        </Card>
                    </ListItem>
                    ))}

                    <ListItem sx={{backgroundColor: 'lightgreen'}}key={"Reserve"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCartCheckoutIcon />
                            </ListItemIcon>
                            
                                <ListItemText sx={{position:'center'}} primary="Reserve" />
                            
                        </ListItemButton>
                    </ListItem>
                </List>
                
            </Box>
        </Drawer>
    );
};
  
export default ShoppingSidebar;