import * as React from 'react' 
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import theme from "../../theme/theme"
import { useNavigate } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import StoreIcon from '@mui/icons-material/Store';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ConsumerSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    let toHome = () => {
        localStorage.setItem('curr_user_id', JSON.stringify(-1));
        navigate("/")
    }
    let toFAQ = () => {
        navigate("/customer/faq")
    }
    let toProducts = () => {
        navigate("/customer/")
    }

    return (
        <Drawer open={isOpen} onClose={toggle}>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggle}
                onKeyDown={toggle}
            >
                <List>
                    <ListItem key={"View Products"} disablePadding>
                        <ListItemButton onClick={toProducts}>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="View Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Orders"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"FAQ"} disablePadding>
                        <ListItemButton onClick={toFAQ}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="FAQ" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Sign Out"} disablePadding>
                        <ListItemButton onClick={toHome}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sign Out" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
  
export default ConsumerSidebar;