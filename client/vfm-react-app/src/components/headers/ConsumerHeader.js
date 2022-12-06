import * as React from 'react' 
import {  Stack, AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton, FormControlLabel, Switch } from '@mui/material';
import headerLogo from "../../images/logo-simple.png"
import theme from "../../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar';
import ShoppingCartButton from '../buttons/ShoppingCartButton';
import ConsumerSidebar from '../sidebars/ConsumerSidebar';
import ShoppingSidebar from '../sidebars/ShoppingSidebar';


// A Header Component used by the Consumer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const ConsumerHeader = () => {
    let navigate = useNavigate()
    let toProducts = () => navigate("/customer")
    let [sideBarOpen, setSidebarState] = React.useState(false)
    let toggleSidebar = () => {
        console.log("show shopping sidebar")
        setSidebarState(!sideBarOpen)
    }

    let [shoppingSiderbarState, setShoppingSidebarState] = React.useState(false)

    let [isFarmerSearch, setIsFarmerSearch] = React.useState(JSON.parse(localStorage.getItem('isFarmerSearch')) || false)

    let changeSearch = () => { setIsFarmerSearch(!isFarmerSearch); localStorage.setItem('isFarmerSearch', !isFarmerSearch); console.log("isFarmerSearch: " + localStorage.getItem('isFarmerSearch'))}

    let toggleShoppingSiderbar = () => {
        console.log("show shopping sidebar")
        setShoppingSidebarState(!shoppingSiderbarState)
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
                                FarmFresh
                            </Typography>
                        </Button>
                        </Box>
                        <Stack spacing="10px" direction="row" sx={{ flexGrow: 2 }}>
                            <SearchBar />
                            <FormControlLabel onChange={changeSearch} sx={{ right: '2px'}} checked={isFarmerSearch} control={<Switch  />} labelPlacement="right" label={<Typography sx={{ color: "black" }} >{isFarmerSearch ? "Farmer Search" : "Product Search"}</Typography>} />
                        </Stack>
                        <ShoppingCartButton onClick={toggleShoppingSiderbar}>
                        </ShoppingCartButton>
                        <ShoppingSidebar isOpen={shoppingSiderbarState} toggle={toggleShoppingSiderbar} />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default ConsumerHeader;