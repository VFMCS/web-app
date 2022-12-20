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
import FarmerCard from '../components/FarmerCard.js';

const store = createStore();  // Create store for storing our global state


// When the Customer Search switch is flipped, you can search for farmers. This will display the results
// in a grid. 

const CustomerSearchVendors = () => {

    const location = useLocation();

    const [searchOutput, setSearchOutput] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        let url = 'http://localhost:5001/search/vendors/' + search_query;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setSearchOutput(data))
            .catch(err => console.error(err));

    }, [location.state])

    if (searchOutput.length === 0) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Stack direction="column" >
                    <ConsumerHeader />
                    <Stack direction="column" minHeight={"85vh"}>
                        <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                            Search results for "{search_query}"
                        </Typography>
                        <Divider />
                        <center>
                            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                                No Search Results Found
                            </Typography>
                        </center>
                    </Stack>
                </Stack>
            </ThemeProvider>
        )
    }
    console.log(searchOutput);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <ConsumerHeader />
                <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                    Search results for "{search_query}"
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4, minHeight: "75vh"}}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                            {searchOutput.map((item) => (
                                <Grid item xs={2} sm={4} md={4} key={item.product_id}>
                                    <FarmerCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default CustomerSearchVendors

