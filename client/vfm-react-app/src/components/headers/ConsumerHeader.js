import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../../images/logo-simple.png"
import theme from "../../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar';
import ShoppingCartButton from '../buttons/ShoppingCartButton';
import ConsumerSidebar from '../sidebars/ConsumerSidebar';

// A Header Component used by the Consumer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ConsumerHeader = () => {
    let navigate = useNavigate()
    let toProducts = () => navigate("/customer")
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
                        <ConsumerSidebar isOpen={sideBarOpen} toggle={toggleSidebar} />
                        <Box sx={{flexGrow: 1}}>
                        <Button onClick={toProducts}>
                            <img src={headerLogo} alt="Logo" />
                            <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
                                Virtual Farmers Market
                            </Typography>
                        </Button>
                        </Box>
                        <Box sx={{flexGrow: 3}}>
                        <SearchBar />
                        </Box>
                        <ShoppingCartButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default ConsumerHeader;