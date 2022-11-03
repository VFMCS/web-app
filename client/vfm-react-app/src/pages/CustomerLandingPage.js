import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme.js'
import LandingHeader from '../components/LandingHeader.js';
import { Divider } from '@mui/material';
import ProductCard from '../components/ProductCard.js';
import FarmerCard from '../components/FarmerCard.js';

//Customer landing page upon customer being signed in
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Get featured farmers
let farmerInfo = {};
fetch('http://localhost:3001/farmers').then(response => response.json()).then(data => farmerInfo = data.data)
      .catch(err => console.error(err));

console.log(farmerInfo)

const CustomerLandingPage = () => {
    const [featuredFarmersInfo, setFeaturedFarmersInfo] = React.useState([
    {
      "first_name": "John",
      "last_name": "Farmer",
      "about_me": "I can't get enough of farming"
  },
  {
      "first_name": "Steve",
      "last_name": "Farmer",
      "about_me": "I'm nice at farming"
  },
  {
      "first_name": "Henry",
      "last_name": "Notshah",
      "about_me": "I am a farmer that distributes vegetables in Amherst Center. All of my vegetables are quality grown and I use advanced farming techniques. No GMOs used"
  }
]) 

    console.log(featuredFarmersInfo);

    featuredFarmersInfo[0].image = 'https://thumbs.dreamstime.com/b/pengzhou-china-farmer-bicycle-16230465.jpg'
    featuredFarmersInfo[1].image = 'https://www.gazettenet.com/getattachment/d3ceb3a3-e856-44a5-9557-d76987b2d7bf/hl090916-storyplace-ph06'
    featuredFarmersInfo[2].image = 'https://usfarmersandranchers.org/wp-content/uploads/2022/10/DougSaathoff-880x596.jpg'


    /*
    <div className="featured-farmers-names">
          {featuredFarmersInfo.map(farmer => <div>{farmer.name}</div>)}
    </div>
    */

  let farmerArr = Array(10).fill({name: "Steve", location : "1234 Street Street", description : "Coolest farmer in Amherst"})
  let farmers = [{name : "Greg", location : "152 North Street", descripton : "Great potatoes"}, {name : "John", location : "100 South Street", description : "dope squash"}].concat(farmerArr)
  let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
  let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LandingHeader />
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                backgroundColor : "secondary.light"
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Customer Home Page
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Welcome! Here are the products currently available in your area:
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                </Stack>
              </Container>
            </Box>
            
            <Typography variant="h4" align="center" sx={{ pt: 4 }}>
                Featured Farmers
            </Typography>

            <Container sx={{ py: 8 }} maxWidth="lg">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {featuredFarmersInfo.map((farmer) => (
                  <Grid item key={farmer} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          height: 300,
                          pt: '0%',
                        }}
                        image={farmer.image}
                        //image =
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          <center>{farmer.first_name}</center>
                        </Typography>
                        <Typography>
                        <center>{farmer.about_me}</center>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: 'secondary.light', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
          </Box>
          {/* End footer */}
        </ThemeProvider>

      );
};

export default CustomerLandingPage

