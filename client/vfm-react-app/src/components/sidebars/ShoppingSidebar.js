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
import DeleteIcon from '@mui/icons-material/Delete';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ShoppingSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    let toHome = () => {
        localStorage.setItem('curr_user_id', JSON.stringify(-1));
        navigate("/")
    }

    let [cart_transactions, setCartTransactions] = React.useState([]) // capture data from GET request

    let toMakeCart = () => {
        let url = 'http://localhost:3001/api/transaction/cart/' + localStorage.getItem('curr_user_id');
        //console.log(url);
        fetch(url).then(response => response.json()).then(data => {console.log(data); setCartTransactions(data)})
          .catch(err => console.error(err));     
    }

    React.useEffect(() => {
        toMakeCart();
    }, [isOpen])

    let updateQuantity = item => (event) => {
        console.log("curr_transaction_id: " + item.transaction_id);
        console.log("quantity: " + event.target.value);
        console.log("in_cart: " + item.in_cart);

        const url = "http://localhost:3001/api/transaction/update/"
        if(event.target.value !== '' || event.target.value > 0){
            item.quantity = event.target.value;
            fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        }
        else{
            item.quantity = 0;
            //fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        }             
    }

    let toReserveRequest = () => {
        let temp = cart_transactions;
        temp.forEach(item => {
            if(item.quantity > 0){
                item.in_cart = false;
                const url = "http://localhost:3001/api/transaction/update/"
                fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
            }
        });

        toggle();
    }

    let toDelete = item => () => {
        const url = "http://localhost:3001/api/transaction/" + item.transaction_id;
        fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
        //window.location.reload(false)
        toggle();
    }

    return (
        <Drawer anchor = 'right' open={isOpen} onClose={toggle}>
            <Box
                sx={{ width: 500 }}
                role="presentation"   
            >   
                <List>
                    {cart_transactions.map((item) => (
                        <ListItem key={item.product_id} sx = {{marginBottom: '20'}}>
                            <Card sx={{display: 'flex' }}>
                           
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 151}}

                                image={item.image_url}
                                alt="Product Image"
                            />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto', marginTop: 1, textAlign: 'center'}}>
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
                                    sx={{marginTop: 6}}
                                    onChange={updateQuantity(item)}
                                />       

                                <ListItemButton onClick={toDelete(item)}>
                                    <ListItemIcon>
                                        <DeleteIcon />
                                    </ListItemIcon>
                                </ListItemButton>   
                        </Card>
                    </ListItem>
                    ))}

                    <ListItem sx={{backgroundColor: 'lightgreen', marginTop: 1}}key={"Reserve"} disablePadding>
                        <ListItemButton onClick={toReserveRequest}>
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