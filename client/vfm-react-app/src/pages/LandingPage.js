import * as React from 'react' 
import LandingHeader from '../components/headers/LandingHeader.js';
import {Box, ThemeProvider, CssBaseline, Typography} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import SignUpButton from '../components/buttons/SignUpButton.js';
import LoginButton from '../components/buttons/LoginButton.js';

// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)

const LandingPage = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <LandingHeader />
                <Box sx={{backgroundColor: "secondary.light"}}>
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "secondary.contrastText"}}>
                        Welcome to the Virtual Farmer's Market!
                    </Typography>
                    <Typography variant="body2" sx={{margin: 4}}>
                        {/* TODO: Change this text/body */}
                        <p>
                        We are developing a Web Application to allow farmers to post fresh produce they have recently harvested to be purchased by consumers online. 
                        We hope that this product gives consumers a platform to purchase directly from farmers, as opposed to having to purchase from a large-chain grocery store. 
                        With this in mind, we anticipate that this will allow our customers to get better quality produce that is in season, build relationships with local farmers, and get a better picture of where and how their food is produced. 
                        </p>
                        <p>
                        Our project has multiple major benefits which differentiate it from other similar products on the market. 
                        First, our product emphasizes the purchase of local produce as opposed to purchasing from large-scale grocery stores or industrial farms. 
                        This will hopefully generate connection and partnership between farmers and consumers in the local area, greatly benefiting the local agriculture industry. 
                        In creating this direct relationship, our consumers will have much more knowledge about the practices used in cultivating their food (what pesticides are used, what farming practices are used, whether or not animals are treated ethically) in comparison to a consumer who purchases their food through traditional grocery stores. 
                        Additionally, by cutting out the middleman and allowing farmers to sell directly to consumers, we develop a system which is more economically viable for smaller-scale farms. 
                        Lastly, we hope that our design allows for increased accessibility for anyone seeking to purchase produce.
                        </p>
                    </Typography>
                </Box>
                <Box alignItems="center" justifyContent="center" sx={{backgroundColor: "white", marginBottom: 4}}>
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "primary.main"}}>
                        Ready to Join?
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                        <SignUpButton label="Become a Farmer" />
                        <SignUpButton label="Become a Consumer" />
                    </Stack>
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "primary.main"}}>
                        Already a User?
                    </Typography>
                    <Stack  direction="row" justifyContent="center" alignItems="center" spacing={4}>
                        <LoginButton sx={{margin: 4}} color="secondary" variant="contained" /> 
                    </Stack>
                </Box>
            </Stack>
        </ThemeProvider>
        
        
    );
};
  
export default LandingPage;