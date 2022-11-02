import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../images/logo-simple.png"
import theme from "../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerHeader = () => {
    let navigate = useNavigate()
    let toDashboard = () => navigate("/dashboard")
    let toProducts = () => navigate("/farmer")

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
                        <Button onClick={toDashboard}>
                            <Typography sx={{ color: "primary.dark", fontWeight: "bold"}}>
                                Dashboard
                            </Typography>
                        </Button>
                        <Button onClick={toProducts}>
                            <Typography sx={{ color: "primary.dark", fontWeight: "bold"}}>
                                Your Products
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default FarmerHeader;