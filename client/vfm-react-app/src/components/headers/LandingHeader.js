import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../../images/logo-simple.png"
import theme from "../../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import SignUpButton from '../buttons/SignUpButton';
import LoginButton from '../buttons/LoginButton';
import { useNavigate } from "react-router-dom";
import GeneralSidebar from '../sidebars/GeneralSidebar';

// A Header Component used for the General Landing Page
// Contains a Menu Item, the logo/title, sign up button, and login button
const LandingHeader = () => {
    let navigate = useNavigate()
    let toFarmer = () => {
        navigate('/farmer')
    }
    let toConsumer = () => {
        navigate('/customer')
    }
    let [sideBarOpen, setSidebarState] = React.useState(false)
    let toggleSidebar = () => {
        setSidebarState(!sideBarOpen)
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' sx={{background: "white"}}>
                    <Toolbar> 
                        <IconButton onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                        <GeneralSidebar isOpen={sideBarOpen} toggle={toggleSidebar} />
                        <Box sx={{flexGrow: 1}}>
                        <Button>
                            <img src={headerLogo} alt="Logo" />
                            <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
                                Virtual Farmers Market
                            </Typography>
                        </Button>
                        </Box>
                        <Box sx={{flexGrow: 2}}>
                            <Button  variant="contained" sx={{ bgcolor: "primary.dark", fontWeight: "bold"}} startIcon={<AddCircleIcon fontSize="large" />}>
                                Create Product
                            </Button>
                        </Box>
                        <Button onClick={toDashboard}>
                            <Typography sx={{ color: "primary.dark", fontWeight: "bold"}}>
                                Farmer Page {/* TEMPORARY */}
                            </Typography>
                        </Button>
                        <Button onClick={toConsumer}>
                            <Typography sx={{ color: "primary.dark", fontWeight: "bold"}}>
                                Consumer Page {/* TEMPORARY */}
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default LandingHeader;