import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Grid, Divider} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'

//Customer landing page upon customer being signed in

const FarmerLandingPage = () => {
    //let [products, setProducts] = React.useState([])
    let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
    let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <FarmerHeader />
                <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                    Your Products    
                </Typography>
                <Divider />
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((item) => (
                            <Grid item xs={2} sm={4} md={4} key={item.name}>
                                <ProductCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerLandingPage

