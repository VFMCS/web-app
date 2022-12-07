import * as React from 'react' 
import { AppBar, Toolbar, Button, Box, ThemeProvider, CssBaseline, Typography, IconButton} from '@mui/material';
import headerLogo from "../../images/logo-simple.png"
import theme from "../../theme/theme"
import MenuIcon from "@mui/icons-material/Menu"
import SignUpButton from '../buttons/SignUpButton';
import LoginButton from '../buttons/LoginButton';
import { useNavigate } from "react-router-dom";
import JumpingButton from '../buttons/JumpingButton';

// A Header Component used for the General Landing Page
// Contains a Menu Item, the logo/title, sign up button, and login button
const LandingHeader = ({landing}) => {
    let navigate = useNavigate();
    let toLanding = () => navigate("/");
 
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' sx={{background: "transparent"}}>
                    <Toolbar> 
                        <Box sx={{flexGrow: 1}}>
                        <Button onClick={toLanding}>
                            <img src={headerLogo} alt="Logo" />
                            <Typography sx={{ color: "primary.light", fontSize: 20, fontWeight: "bold"}}>
                                FarmFresh
                            </Typography>
                        </Button>
                        </Box>
                        {landing && <JumpingButton id={"explanation"} label={"How It Works"} />}
                        {landing && <JumpingButton id={"mission"} label={"Our Mission"}/>}
                        <LoginButton landingTextColor="primary.light"/>
                        <SignUpButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
  
export default LandingHeader;