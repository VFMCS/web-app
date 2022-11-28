import * as React from 'react'
import { Box, ThemeProvider, CssBaseline, Typography, Grid, Divider } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import { search_query } from '../components/SearchBar.js'
import { useLocation } from "react-router-dom";
import ConsumerHeader from '../components/headers/ConsumerHeader.js';

const FarmerSearch = () => {
    const location = useLocation();

    const [searchOutput, setSearchOutputProducts] = React.useState([]) // capture data from GET request

    React.useEffect(() => {
        //using placeholder farmer of vendor_id=0
        let url = 'http://localhost:3001/search/' + search_query + '/' + localStorage.getItem('curr_user_id');
        if (search_query === '') {
            url = 'http://localhost:3001/api/products/' + localStorage.getItem('curr_user_id');
        }
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setSearchOutputProducts(data))
            .catch(err => console.error(err));
    }, [location.state])

    /*
    React.useEffect(() => {
        const fetchData = async () => {
            console.log(search_query);
            let url = 'http://localhost:3001/search/' + search_query;

            const result = await fetch(url).then(response => response.json()).then(data => setSearchOutput(data))
            .catch(err => console.error(err));
        }
        fetchData();
    }, [])
    */

    if (searchOutput.length === 0) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Stack direction="column">
                    <FarmerHeader />
                    <Typography variant="h5" sx={{ margin: 2, color: "primary.main" }}>
                        Search Results
                    </Typography>
                    <Divider />
                    <center>
                        <Typography variant="h5" sx={{ margin: 2, color: "black" }}>
                            No Search Results Found
                        </Typography>
                    </center>
                </Stack>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <FarmerHeader />
                <Typography variant="h5" sx={{ margin: 2, color: "primary.main" }}>
                    Search Results
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {searchOutput.map((item) => (
                                <Grid item xs={2} sm={4} md={4} key={item.product_id}>
                                    <ProductCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerSearch

