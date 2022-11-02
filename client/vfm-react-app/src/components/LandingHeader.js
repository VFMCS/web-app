import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../images/logo-simple.png"
import theme from "../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import SignUpButton from './buttons/SignUpButton';
import LoginButton from './buttons/LoginButton';
import { useNavigate } from "react-router-dom";

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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' sx={{background: "white"}}>
                    <Toolbar> 
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{flexGrow: 1}}>
                        <Button>
                            <img src={headerLogo} alt="Logo" />
                            <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
                                Virtual Farmers Market
                            </Typography>
                        </Button>
                        </Box>
                        <LoginButton />
                        <SignUpButton />
                        <Button onClick={toFarmer}>
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