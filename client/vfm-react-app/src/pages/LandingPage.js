import * as React from 'react' 
import LandingHeader from '../components/headers/LandingHeader.js';
import {Box, ThemeProvider, CssBaseline, Typography, Paper} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import SignUpButton from '../components/buttons/SignUpButton.js';
import LoginButton from '../components/buttons/LoginButton.js';
import HeaderImage from '../images/pexels-rgr-g.jpg';
import BackgroundFarmImage from '../images/pexels-tim-mossholder.jpg'


// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)

const LandingPage = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <LandingHeader landing/>
                <Box marginTop={-12} sx={{height: '100vh', backgroundSize: 'cover', backgroundImage: `url(${HeaderImage})`}}>
                    <Typography variant="h3" align="left" sx={{margin: 4, marginTop: 20, color: "secondary.contrastText"}}>
                        Welcome to FarmFresh!
                    </Typography>

                    <Stack direction="row" justifyContent="left" alignItems="center" spacing={4} sx={{marginLeft: 4}}>
                        <SignUpButton label="Become a Farmer" />
                        <SignUpButton label="Become a Consumer" />
                        <LoginButton color="primary" variant="contained"/>    
                    </Stack>
                </Box>
                <Box id="mission" display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ backgroundSize: 'cover', backgroundImage: `url(${BackgroundFarmImage})`}}>
                    <Paper sx={{width: "50vw", height: "50vh", p: 2}}>
                        <Typography variant="h3" align="center" sx={{m: 2, color: "primary.dark"}}>
                            Our Mission
                        </Typography>
                        <Typography variant="h6" align="center" sx={{m: 2, color: "primary.dark"}}>
                            We are creating a platform to connect small-business farmers with local consumers. For farmers, we offer a place to post fresh produce as soon as it is harvested. For consumers, we offer a virtual marketplace to shop for local produce and support small-business farmers. 
                        </Typography>
                        <Typography variant="h5" align="center" sx={{mt: 4, color: "primary.dark"}}>
                            Join us in our mission to shop local!
                        </Typography>                  
                    </Paper>
                </Box>
                <Box justifyContent="center" alignItems="center" sx={{backgroundColor: "primary.dark", p: 2}}>
                    <Typography align='center' color={"white"}>
                        Have a question? Please send all inquiries to ____@gmail.com!
                    </Typography>
                    <Typography align='center' color={"white"}>
                        Created in 2022 by VFMCS as a CS320 Project.
                    </Typography>
                    
                </Box>
            </Stack>
        </ThemeProvider>
        
        
    );
};
  
export default LandingPage;