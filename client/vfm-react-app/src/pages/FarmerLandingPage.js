import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Grid, Divider, Fab} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ProductCard from '../components/ProductCard.js'
import EditIcon from '@mui/icons-material/Edit';

//Customer landing page upon customer being signed in

const FarmerLandingPage = () => {

    let defaultProducts = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"},{name: "Potato", price: "75", description: "This is a potato"}]
    const [products, setProducts] = React.useState(defaultProducts) // capture data from GET request

    React.useEffect(() => {
        fetch('http://localhost:3001/api/products').then(response => response.json()).then(data => {
            setProducts(data)
            console.log(data)
    })
        .catch(err => console.error(err));
    }, [])
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <FarmerHeader />
                <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                    Your Products    
                </Typography>
                <Divider />
                <center>
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* Replace with current vendor id*/}
                        {products.filter(p => p.vendor_id == 0).map((item) => (
                            <Grid item xs={2} sm={4} md={4} key={item.name}>
                                <ProductCard editMode item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                </center>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerLandingPage

