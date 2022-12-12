import * as React from 'react'
import { Modal, Box, ThemeProvider, CssBaseline, Typography, Grid, Divider } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import { search_query } from '../components/SearchBar.js'
import { useLocation } from "react-router-dom";
import ConsumerHeader from '../components/headers/ConsumerHeader.js';
import {createStore} from 'state-pool';
import ProductCardReserved from '../components/ProductCardReserved.js';
import ProductCardCompleted from '../components/ProductCardCompleted.js';

const store = createStore();  // Create store for storing our global state


// Query and show a grid of customer's completed orders
const CustomerCompletedOrders = () => {

    const location = useLocation();

    const [modalOpen, setModalState] = React.useState(false);

    const [customer_completed_orders, setCustomerCompletedOrders] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        let url = 'http://localhost:3001/api/transaction/past/customer/' + localStorage.getItem('curr_user_id');
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setCustomerCompletedOrders(data))
            .catch(err => console.error(err));

    }, [])

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <ConsumerHeader />
                <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                    Completed Orders
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4, minHeight: "75vh"}}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                            {customer_completed_orders.map((item) => (
                                <Grid item xs={2} sm={3} md={4} key={item.product_id}>
                                    <ProductCardCompleted isCustomer item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default CustomerCompletedOrders

