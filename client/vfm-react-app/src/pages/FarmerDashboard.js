import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Divider, Grid} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import LandingHeader from '../components/headers/LandingHeader.js';
import ProductCard from '../components/ProductCard.js';
import FarmerHeader from '../components/headers/FarmerHeader.js';

//Customer views this farmer profile upon being signed in an hitting the view profile from the landing page

const FarmerDashboard = (props) => {
    let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
    let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
  
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <FarmerHeader />
            <Box sx={{backgroundColor: "secondary.light"}}>
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "secondary.contrastText"}}>
                        Welcome to my farm!
                    </Typography>
                    {/* TODO ADD AN IMAGE HERE*/}
                    <Typography variant="body2" sx={{margin: 4}}>
                        {/* TODO: Change this text/body */}
                       ABOUT MY FARM. My farm is the coolest farm. INPUT MORE TEXT FROM DESCRIPTION HERE.
                    </Typography>
                </Box>
                <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                    My Products!
                </Typography>
                <Divider />
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((item) => (
                            <Grid item xs={2} sm={2} md={2} key={item.name}>
                                <ProductCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                

            </Stack>
        </ThemeProvider>
    );
};

export default FarmerDashboard

