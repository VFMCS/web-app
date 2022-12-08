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
import FiltersBar from '../components/FiltersBar.js';
import { useNavigate } from 'react-router-dom';

//Customer landing page upon customer being signed in
//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

localStorage.setItem('isFarmerSearch', false);

const CustomerLandingPage = () => {
  //TESTING///////
  /*
  let farmerArr = Array(10).fill({name: "Steve", location : "1234 Street Street", description : "Coolest farmer in Amherst"})
  let farmers = [{name : "Greg", location : "152 North Street", descripton : "Great potatoes"}, {name : "John", location : "100 South Street", description : "dope squash"}].concat(farmerArr)
  let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
  let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
  */
  const allCategories = [
    "Lemon",
    "Apples",
    "Pears",
    "Oranges", 
    "Grapefruit", 
    "Lime", 
    "Peaches", 
    "Tomatoes", 
    "Blueberries", 
    "Cherries", 
    "Onion", 
    "Garlic", 
    "Potatoes", 
    "Asparagus",
    "Celery", 
    "Broccoli", 
    "Cabbage",
    "Cauliflower" 
  ]
  

  const [farmers, setFarmers] = React.useState([]) // capture data from GET request

  React.useEffect(() => {
    fetch('http://localhost:3001/api/vendors').then(response => response.json()).then(data => {setFarmers(data); })
      .catch(err => console.error(err));
  }, [])


  const [products, setProducts] = React.useState([]) // capture data from GET request

  const [selectedFilters, setSelectedFilters] = React.useState([]) // keep track of selected filters (from tags)

  const [displayedProducts, setDisplayedProducts] = React.useState([])

  // Set products to display based on selected filters
  React.useEffect( () => {
    if (selectedFilters.length === 0) {
      setDisplayedProducts(products.slice(0, 5)) // Featured Products
    }
    else if (selectedFilters.includes("All")) {
      setDisplayedProducts(products)
    }
    else {
      console.log(selectedFilters)
      setDisplayedProducts(products.filter(p => selectedFilters.includes(p.product_type) || selectedFilters.includes(p.product_category))) // Filtered Products
    }
  }, [selectedFilters, products])

  // Fetch all products on first render
  React.useEffect(() => {
    fetch('http://localhost:3001/api/products').then(response => response.json()).then(data => {setProducts(data);})
      .catch(err => console.error(err));
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Stack direction="column">
        <ConsumerHeader />
        <div>
          <center>
            <Typography textAlign="left" variant="h5" sx={{ margin: 4, color: "black" }}>
            Featured Farmers
            </Typography>
          </center>
          <center>
              <Box sx={{ margin: 4 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                    {(farmers.slice(0, 5)).map((item) => (
                      <Grid item xs={2} sm={4} md={4} key={item.user_id}>
                        <FarmerCard item={item} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
          </center>
        </div>  
        <center><Typography textAlign="left" variant="h5" sx={{ margin: 4, marginBottom: 0, color: "black" }}>
          {selectedFilters.length === 0 ? "Featured" : (selectedFilters.includes("All") ? "All" : "Filtered")} Products       
        </Typography> </center>

        <FiltersBar noOutput={selectedFilters.length === 0} filters={["All","Fruit", "Vegetable", "Organic"].concat(allCategories.slice(0,5))} exclusive selectedItems={selectedFilters} setSelectedItems={setSelectedFilters}/> 
        
        <center>
          <Box sx={{ margin: 2, marginTop: 0, marginBottom: 4, minHeight: "60vh"}}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 20 }}>
              {displayedProducts.map((item) => (
                <Grid item xs={1} sm={3} md={4} key={item.product_id}>
                  <ProductCard addMode isCustomer item={item} />
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

