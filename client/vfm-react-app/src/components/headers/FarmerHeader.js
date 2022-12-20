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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FarmerProfileModal from '../FarmerProfileModal';

// A Header Component used by the Farmer
// Contains: Menu button, Logo, Dashboard button, and Products Button
const FarmerHeader = () => {
    const [modalOpen, setModalState] = React.useState(false);
    const [profileModalOpen, setProfileModalState] = React.useState(false);
    let navigate = useNavigate()
    let toDashboard = () => navigate("/dashboard")
    let toPostItem = () => setModalState(true)
    const toClosePost = () =>  setModalState(false) 
    let toProducts = () => navigate("/farmer")
    let [sideBarOpen, setSidebarState] = React.useState(false)
    let toggleSidebar = () => {
        setSidebarState(!sideBarOpen)
    }

    const [credentials, setCredentials] = React.useState({
        password: "",
        first_name: "",
        last_name: "",
        address:"",
        is_vendor:false,
        photo:null,
        about_me:"",
        email: "",
        created_on: new Date(),
        image_url:"",
        role:"farmer"
      });

      
    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials((prev) => {
            return {
            ...prev,
            [name]: value,
            };
        });
        console.log(credentials)
    };

    const patchCredentials = () => {
        // Send patch request with credentials
    }

    React.useEffect(() => {
        let url = 'http://localhost:3001/api/vendors/' + (localStorage.getItem('curr_user_id'));
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {setCredentials(data[0])})
            .catch(err => console.error(err));
    }, [])

    let modalCloseHandler = (e, reason) => {
        if (reason === "backdropClick") {
            setProfileModalState(false)
            return
        }
        setProfileModalState(false)
        patchCredentials()
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
                            <Button onClick={toProducts}>
                                <img src={headerLogo} alt="Logo" />
                                <Typography sx={{ color: "primary.dark", fontSize: 20, fontWeight: "bold"}}>
                                    FarmFresh
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{flexGrow: 3}}>
                        <SearchBar />
                        </Box>
                        <IconButton disableRipple onClick={() => setProfileModalState(true)} variant="contained" color='inherit' sx={{ bgcolor: "primary.dark", fontWeight: "bold", mr: 2}}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Button  onClick={toPostItem} variant="contained" sx={{ bgcolor: "primary.dark", fontWeight: "bold"}} startIcon={<AddCircleIcon fontSize="large" />}>
                            Create Product
                        </Button>
                        <Modal open={modalOpen} onClose={() => setModalState(false)} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Box sx={{
                                position: 'relative',
                                width: '1000px',
                                height: '650px',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: (theme) => theme.shadows[5],
                                p: 4,
                                }}>
                                <FarmerPostItem setModalState={setModalState} />
                            </Box>
                        </Modal>
                        <FarmerProfileModal editMode open={profileModalOpen} setModalState={setProfileModalState} onClose={modalCloseHandler} profile={credentials} changeHandler={handleChange} />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default FarmerHeader;