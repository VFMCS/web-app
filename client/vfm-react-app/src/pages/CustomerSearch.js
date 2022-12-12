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

const store = createStore();  // Create store for storing our global state

// Customer is able to enter in a query on the search bar and this shows a grid of the search results
const CustomerSearch = () => {


    const location = useLocation();

    const [searchOutput, setSearchOutput] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        let url = 'http://localhost:3001/search/products/' + search_query;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setSearchOutput(data))
            .catch(err => console.error(err));

    }, [location.state])

    if (searchOutput.length === 0) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Stack direction="column">
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
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 20 }}>
                            {searchOutput.map((item) => (
                                <Grid item xs={1} sm={3} md={4} key={item.product_id}>
                                    <ProductCard isCustomer addMode item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default CustomerSearch

