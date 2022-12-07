import * as React from 'react' 
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import theme from "../../theme/theme"
import { useNavigate } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArchiveIcon from '@mui/icons-material/Archive';
import SearchIcon from '@mui/icons-material/Search';


// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ConsumerSidebar = ({isOpen, toggle}) => {
    let navigate = useNavigate()
    let toHome = () => {
        localStorage.setItem('curr_user_id', -1)
        navigate("/")
    }

    let toSearch = () => {
        navigate("/customer")
    }

    let toCustomerCurrentOrders = () => {
        navigate("/customer-current-orders")
    }

    let toCustomerCompletedOrders = () => {
        navigate("/customer-completed-orders");
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
                    <ListItem key={"Search"} disablePadding>
                        <ListItemButton onClick={toSearch}>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Reserves"} disablePadding>
                        <ListItemButton onClick={toCustomerCurrentOrders}>
                            <ListItemIcon>
                                <BookmarkBorderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Reserves" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Completed Orders"} disablePadding>
                        <ListItemButton onClick={toCustomerCompletedOrders}>
                            <ListItemIcon>
                                <ArchiveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Completed Orders" />
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