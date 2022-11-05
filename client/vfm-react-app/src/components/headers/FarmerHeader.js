import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton, Modal, Paper} from '@mui/material';
import headerLogo from "../../images/logo-simple.png"
import theme from "../../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchBar from '../SearchBar';
import FarmerSidebar from '../sidebars/FarmerSidebar';
import FarmerPostItem from '../FarmerPostItem';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerHeader = () => {
    let [modalOpen, setModalState] = React.useState(false);
    let navigate = useNavigate()
    let toDashboard = () => navigate("/dashboard")
    let toPostItem = () => setModalState(true)
    let toProducts = () => navigate("/farmer")
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
                        <FarmerSidebar isOpen={sideBarOpen} toggle={toggleSidebar}/>
                        <Box sx={{flexGrow: 1}}>
                            <Button>
                                <img src={headerLogo} alt="Logo" />
                                <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
                                    Virtual Farmers Market
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{flexGrow: 3}}>
                        <SearchBar />
                        </Box>
                        <Button  onClick={toPostItem} variant="contained" sx={{ bgcolor: "primary.dark", fontWeight: "bold"}} startIcon={<AddCircleIcon fontSize="large" />}>
                            Create Product
                        </Button>
                        <Modal open={modalOpen} onClose={() => setModalState(false)} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Box sx={{
                                position: 'relative',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: (theme) => theme.shadows[5],
                                p: 4,
                                }}>
                                <Paper>
                                    <FarmerPostItem />
                                </Paper>
                            </Box>
                        </Modal>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default FarmerHeader;