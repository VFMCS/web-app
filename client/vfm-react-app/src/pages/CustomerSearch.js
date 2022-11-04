import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Grid, Divider} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import {search_query} from '../components/SearchBar.js'
import { useLocation } from "react-router-dom";
import ConsumerHeader from '../components/headers/ConsumerHeader.js';


//Customer landing page upon customer being signed in

const CustomerSearch = () => {
    //let [products, setProducts] = React.useState([])
    //let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
    //let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)

    const location = useLocation();

    const [searchOutput, setSearchOutput] = React.useState([]) // capture data from GET request
    React.useEffect(() => {
        let url = 'http://localhost:3001/search/' + search_query;

        fetch(url).then(response => response.json()).then(data => setSearchOutput(data))
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
    
    if(searchOutput.length == 0){
        return(
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <ConsumerHeader />
                <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                    Search Results    
                </Typography>
                <Divider />
                <center>
                <Typography variant="h5" sx={{margin: 2, color: "black"}}>
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
                <ConsumerHeader />
                    <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                        Search Results    
                    </Typography>
                    <Divider />
                    <center>
                    <Box sx={{margin: 4}}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {searchOutput.map((item) => (
                                <Grid item xs={2} sm={4} md={4} key={item.product_id}>
                                    <ProductCard item={item}/>
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

