import * as React from 'react'
import { Box, ThemeProvider, CssBaseline, Typography, Grid, Divider, Fab } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import EditIcon from '@mui/icons-material/Edit';
import ProductCardReserved from '../components/ProductCardReserved.js';

//Customer landing page upon customer being signed in

const FarmerReserves = () => {    
    const [products, setProducts] = React.useState([]) // capture data from GET request
	const curr_user_id = localStorage.getItem('curr_user_id');

    React.useEffect(() => {
        console.log("curr_user_id for products: " + localStorage.getItem('curr_user_id'));
        let url = 'http://localhost:3001/api/transaction/reserves/' + localStorage.getItem('curr_user_id');
        console.log(url);

        fetch(url).then(response => response.json()).then(data => setProducts(data))
            .catch(err => console.error(err));
    }, [])

    //let potatoArr = Array(1).fill({name: "Potato", price: "75", description: "This is a potato"})
    //let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <FarmerHeader />
                <Typography variant="h5" sx={{ margin: 2, color: "primary.main" }}>
                    Current Reserves
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {/* Replace with current vendor id*/}
                            {products.map((item) => (
                                <Grid item xs={2} sm={4} md={4} key={item.name}>
                                    <ProductCardReserved item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerReserves

