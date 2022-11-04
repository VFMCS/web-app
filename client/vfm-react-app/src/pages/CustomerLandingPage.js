import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme.js'
import LandingHeader from '../components/headers/LandingHeader.js';

import { Divider } from '@mui/material';
import ProductCard from '../components/ProductCard.js';
import FarmerCard from '../components/FarmerCard.js';
import ConsumerHeader from '../components/headers/ConsumerHeader.js';

//Customer landing page upon customer being signed in
//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CustomerLandingPage = () => {

  //TESTING///////
  /*
  let farmerArr = Array(10).fill({name: "Steve", location : "1234 Street Street", description : "Coolest farmer in Amherst"})
  let farmers = [{name : "Greg", location : "152 North Street", descripton : "Great potatoes"}, {name : "John", location : "100 South Street", description : "dope squash"}].concat(farmerArr)
  let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
  let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
  */

  const [farmers, setFarmers] = React.useState([]) // capture data from GET request


  
  React.useEffect(() => {
    fetch('http://localhost:3001/api/farm').then(response => response.json()).then(data => setFarmers(data.rows))
    .catch(err => console.error(err));
  }, [])

  const [products, setProducts] = React.useState([]) // capture data from GET request

  React.useEffect(() => {
    fetch('http://localhost:3001/data').then(response => response.json()).then(data => setProducts(data.products))
    .catch(err => console.error(err));
  }, [])
  
      
  return (
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Stack direction = "column">
            <ConsumerHeader />
              <center><Typography variant="h5" sx={{margin: 6, color: "black"}}>
                Featured Farmers 
              </Typography></center>
              
              <center>
              <Box sx={{margin: 0}}>
                    <Grid container spacing={{ xs: 0, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {(farmers.slice(0, 3)).map((item) => (
                            <Grid item xs={2} sm={3} md={4} key={item.name}>
                                <FarmerCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
              </center>
                
                <center><Typography variant="h5" sx={{margin: 2, color: "black"}}>
                Featured Products
                </Typography> </center>
              
              <center>
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 20 }}>
                        {(products.slice(0, 5)).map((item) => (
                            <Grid item xs={1} sm={3} md={4} key={item.name}>
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

export default CustomerLandingPage

