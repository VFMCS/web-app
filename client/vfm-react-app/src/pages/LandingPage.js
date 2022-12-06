import * as React from 'react' 
import LandingHeader from '../components/headers/LandingHeader.js';
import {Box, ThemeProvider, CssBaseline, Typography} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import SignUpButton from '../components/buttons/SignUpButton.js';
import LoginButton from '../components/buttons/LoginButton.js';
import HeaderImage from '../images/pexels-rgr-g.jpg';


// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)

const LandingPage = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <LandingHeader/>
                <Box marginTop={-12} sx={{height: '102vh', backgroundSize: 'cover', backgroundImage: `url(${HeaderImage})`}}>
                    <Typography variant="h3" align="left" sx={{margin: 4, marginTop: 20, color: "secondary.contrastText"}}>
                        Welcome to Virtual Farmers Market!
                    </Typography>

                    <Stack direction="row" justifyContent="left" alignItems="center" spacing={4} sx={{marginLeft: 4}}>
                        <SignUpButton label="Become a Farmer" />
                        <SignUpButton label="Become a Consumer" />
                        <LoginButton color="primary" variant="contained"/>    
                    </Stack>

                    
                    
                </Box>
                <Box alignItems="center" justifyContent="center" sx={{backgroundColor: "white", marginBottom: 4}}>
                    
                </Box>
            </Stack>
        </ThemeProvider>
        
        
    );
};
  
export default LandingPage;