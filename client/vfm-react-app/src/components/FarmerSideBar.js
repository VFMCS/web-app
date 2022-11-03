import * as React from 'react' 
import { Drawer, Button, Box } from '@mui/material';
import theme from "../theme/theme"
import { useNavigate } from "react-router-dom";

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerHeader = () => {
    let navigate = useNavigate()
    let toDashboard = () => navigate("/dashboard")
    let toProducts = () => navigate("/farmer")

    return (
        <Drawer>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
  
export default FarmerHeader;