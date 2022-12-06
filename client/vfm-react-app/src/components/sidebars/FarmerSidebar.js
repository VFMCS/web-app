import * as React from 'react' 
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import theme from "../../theme/theme"
import { useNavigate } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/ListAlt'
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    
    let toDashboard = () => navigate("/dashboard")
    let toProducts = () => navigate("/farmer")
    let toFarmerReserves = () => navigate("/farmer-reserves")
    let toFarmerReserveRequests = () => navigate("/farmer-reserve-requests")
    let toHome = () => {
        localStorage.setItem('curr_user_id', JSON.stringify(-1));
        navigate("/")
    }
    let toFAQ = () => {
        navigate("/farmer/faq")
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
                    <ListItem key={"Profile"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Current Reserves"} disablePadding>
                        <ListItemButton onClick={toFarmerReserves}>
                            <ListItemIcon>
                                <BookmarkBorderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Current Reserves" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Reserve Requests"} disablePadding>
                        <ListItemButton onClick={toFarmerReserveRequests}>
                            <ListItemIcon>
                                <PendingActionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Reserve Requests" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Your Products"} disablePadding>
                        <ListItemButton onClick={toProducts}>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Your Products" />
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
                    <ListItem key={"Dashboard"} disablePadding>
                        <ListItemButton onClick={toDashboard}>
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
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
  
export default FarmerSidebar;