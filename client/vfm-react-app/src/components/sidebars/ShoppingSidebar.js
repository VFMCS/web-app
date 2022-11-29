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

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ShoppingSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    let toHome = () => {
        localStorage.setItem('curr_user_id', JSON.stringify(-1));
        navigate("/")
    }

    const [products, setProducts] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        fetch('http://localhost:3001/api/transactions/cart/' + localStorage.getItem('curr-user-id')).then(response => response.json()).then(data => {console.log("data: " + data); setProducts(data);})
          .catch(err => console.error(err));
      }, [])

    let [modalOpen, setModalState] = React.useState(false);
    let toPostItem = () => setModalState(true)

    return (
        <Drawer anchor = 'right' open={isOpen} onClose={toggle}>
            <Box
                sx={{ width: 500 }}
                role="presentation"   
            >   
                <List>
                    {(products.slice(0, 5)).map((item) => (
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
                                            {item.quantity} in Stock
                                        </Typography>
                                        
                                    </CardContent>
                                    
                                </Box>
                                
                                <TextField
                                    id="outlined-quantityText"
                                    type="number"
                                    label="quantity"
                                    defaultValue="1"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    sx={{marginTop: '10'}}
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