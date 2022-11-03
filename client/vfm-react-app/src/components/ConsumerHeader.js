import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../images/logo-simple.png"
import theme from "../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";
<<<<<<<< HEAD:client/vfm-react-app/src/components/ConsumerHeader.js
import SearchBar from './SearchBar';
import ShoppingCartButton from './buttons/ShoppingCartButton';
========
import AddCircleIcon from '@mui/icons-material/AddCircle';
>>>>>>>> 0f32b87f (starting headers):client/vfm-react-app/src/components/FarmerHeader.js

// A Header Component used by the Consumer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ConsumerHeader = () => {
    let navigate = useNavigate()

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
<<<<<<<< HEAD:client/vfm-react-app/src/components/ConsumerHeader.js
                        <Box sx={{flexGrow: 4}}>
                        <SearchBar />
                        </Box>
                        <ShoppingCartButton />
========
                        <Box sx={{flexGrow: 2}}>
                            <Button  variant="contained" sx={{ bgcolor: "primary.dark", fontWeight: "bold"}} startIcon={<AddCircleIcon fontSize="large" />}>
                                Create Product
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
>>>>>>>> 0f32b87f (starting headers):client/vfm-react-app/src/components/FarmerHeader.js
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default ConsumerHeader;