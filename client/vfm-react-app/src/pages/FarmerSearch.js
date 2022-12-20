import * as React from 'react'
import { Box, ThemeProvider, CssBaseline, Typography, Grid, Divider } from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import { search_query } from '../components/SearchBar.js'
import { useLocation } from "react-router-dom";
import ConsumerHeader from '../components/headers/ConsumerHeader.js';

// Farmer is able to search for their own products using the above search bar. This code displays
// it in a grid-like fashion. 
const FarmerSearch = () => {
    const location = useLocation();

    const [searchOutput, setSearchOutputProducts] = React.useState([]) // capture data from GET request

    React.useEffect(() => {
        //using placeholder farmer of vendor_id=0
        let url = 'http://localhost:5001/search/products/' + search_query + '/' + localStorage.getItem('curr_user_id');
        if (search_query === '') {
            url = 'http://localhost:5001/api/products/' + localStorage.getItem('curr_user_id');
        }
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setSearchOutputProducts(data))
            .catch(err => console.error(err));
    }, [location.state])


    if (searchOutput.length === 0) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Stack direction="column" minHeight={"95vh"}>
                    <FarmerHeader />
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
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <FarmerHeader />
                <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
                    Search results for "{search_query}"
                </Typography>
                <Divider />
                <center>
                    <Box sx={{ margin: 4, minHeight: "80vh"}}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                            {searchOutput.map((item) => (
                                <Grid item xs={2} sm={3} md={4} key={item.product_id}>
                                    <ProductCard editMode item={item} />
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

