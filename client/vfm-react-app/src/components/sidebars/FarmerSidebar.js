import * as React from 'react' 
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import theme from "../../theme/theme"
import { useNavigate } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    
    let toDashboard = () => navigate("/dashboard")
    let toProducts = () => navigate("/farmer")
    let toHome = () => navigate("/")

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
                    <ListItem key={"Dashboard"} disablePadding>
                        <ListItemButton onClick={toDashboard}>
                            <ListItemIcon>
                                <EqualizerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
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