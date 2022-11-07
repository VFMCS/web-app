import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Divider, Grid} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import LandingHeader from '../components/headers/LandingHeader.js';
import ProductCard from '../components/ProductCard.js';
import FarmerHeader from '../components/headers/FarmerHeader.js';

//Customer views this farmer profile upon being signed in an hitting the view profile from the landing page
const FarmerProfileView = (props) => {
    const [products, setProducts] = React.useState([]) // capture data from GET request

    React.useEffect(() => {
        //using placeholder farmer of vendor_id=0
        let url = 'http://localhost:3001/api/products/' + localStorage.getItem('curr_user_id');
        
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setProducts(data))
            .catch(err => console.error(err));
    }, [])

    let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
    //let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
  
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <LandingHeader />
            <Box sx={{backgroundColor: "secondary.light", display:"flex", alignItems:'center', justifyContent:'center'}} >
                <Grid container direction="row" sx={{alignItems:"center", display:"flex", justifyContent:'center'}} >
                    <Grid item sx={{alignItems:"center", display:"flex", justifyContent:'center'}}>
                        <img height='290' alt='' src='https://i.pinimg.com/236x/ef/aa/69/efaa696cd77be0b88d973d638ae90949.jpg'></img>
                       
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="left" sx={{margin: 4, color: "black"}}>
                            John Smith
                        </Typography>
                        <Typography variant="body2" sx={{marginLeft: 4, marginBottom:2}}>
                                    {/* TODO: Change this text/body */}
                                    Bio: I am John
                        </Typography>
                        <Typography variant="body2" sx={{marginLeft: 4, marginTop:0}}>
                                    {/* TODO: Change this text/body */}
                                    Farm Location: 20 Brigham Ln, Amherst, MA 01002
                        </Typography>

                    </Grid>        
                </Grid>      
                            
            </Box>
           
                <Typography variant="h5" sx={{margin: 2, color: "black"}}>
                    John's Products
                </Typography>
                <Divider />
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((item) => (
                            <Grid item xs={2} sm={2} md={2} key={item.name}>
                                <ProductCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                

            </Stack>
        </ThemeProvider>
    );
};

export default FarmerProfileView

