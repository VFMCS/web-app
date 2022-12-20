import * as React from 'react'
import { Box, ThemeProvider, CssBaseline, Typography, Grid, Divider } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import { search_query } from '../components/SearchBar.js'
import { useLocation } from "react-router-dom";
import ConsumerHeader from '../components/headers/ConsumerHeader.js';
import {createStore} from 'state-pool';
import ProductCardReserved from '../components/ProductCardReserved.js';
import ProductCardReservedCustomer from '../components/ProductCardReservedCustomer.js';


const store = createStore();  // Create store for storing our global state

// Query and show a grid of customer's completed orders
const CustomerCurrentOrders = () => {

    const location = useLocation();

    const [customer_current_orders, setCustomerCurrentOrders] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        let url = 'http://localhost:5001/api/transaction/customer-current-orders/' + localStorage.getItem('curr_user_id');
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setCustomerCurrentOrders(data))
            .catch(err => console.error(err));

    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <ConsumerHeader />
                <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                    Reserves
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4, minHeight: "75vh"}}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                            {customer_current_orders.map((item) => (
                                <Grid item xs={2} sm={3} md={4} key={item.product_id}>
                                    <ProductCardReservedCustomer isPending item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default CustomerCurrentOrders

