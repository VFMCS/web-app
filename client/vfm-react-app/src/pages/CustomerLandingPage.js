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

localStorage.setItem('isFarmerSearch', false);

const CustomerLandingPage = () => {
  
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
    fetch('http://localhost:5001/api/vendors').then(response => response.json()).then(data => {setFarmers(data); })
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
    fetch('http://localhost:5001/api/products').then(response => response.json()).then(data => {setProducts(data);})
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

