import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Divider, Grid} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import LandingHeader from '../components/headers/LandingHeader.js';
import ProductCard from '../components/ProductCard.js';
import FarmerHeader from '../components/headers/FarmerHeader.js';
import ConsumerHeader from '../components/headers/ConsumerHeader.js';
import { Rating } from 'react-simple-star-rating'



//Customer views this farmer profile upon being signed in an hitting the view profile from the landing page
const FarmerProfileView = ({forFarmer}) => {
    const [products, setProducts] = React.useState([]) // capture data from GET request
    const [farmer_name, setFarmer_Name] = React.useState('')
    const [farmer_first_name, setFarmer_First_Name] = React.useState('')
    const [farmer_description, setFarmer_Description] = React.useState('')
    const [farmer_location, setFarmer_Location] = React.useState('')
    const [farmer_image_url, setFarmer_Image_Url] = React.useState('');
    const [reviews, setReviews] = React.useState([]);


    React.useEffect(() => {
        //using placeholder farmer of vendor_id=0
        let url = 'http://localhost:5001/api/products/' + (forFarmer ? localStorage.getItem('curr_user_id') : localStorage.getItem('clicked-on-user-id'));
        
        //get farmer's products
        console.log(url);
        fetch(url).then(response => response.json()).then(data => setProducts(data))
            .catch(err => console.error(err));
    }, [])

    React.useEffect(() => {
        let url = 'http://localhost:5001/api/vendors/' + (forFarmer ? localStorage.getItem('curr_user_id') : localStorage.getItem('clicked-on-user-id'));
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {setFarmer_Name(data[0].first_name + " " + data[0].last_name); setFarmer_First_Name(data[0].first_name); setFarmer_Description(data[0].about_me); setFarmer_Location(data[0].address); setFarmer_Image_Url(data[0].image_url)})
            .catch(err => console.error(err));

        //get farmer's reviews
        url = 'http://localhost:3001/api/reviews/reviewee_id/' + localStorage.getItem('clicked-on-user-id');
        console.log(url);
        
        fetch(url).then(response => response.json()).then(data => {console.log(data); setReviews(data);})
            .catch(err => console.error(err));

    }, [])

    let potatoArr = Array(10).fill({name: "Potato", price: "75", description: "This is a potato"})
    //let products = [{name: "Tomato", price: "500", description: "This is a tomato"},{name: "Squash", price: "30", description: "This is a squash"}].concat(potatoArr)
  
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            {forFarmer  && <FarmerHeader />}
            {!forFarmer  && <ConsumerHeader />}
            <Box sx={{backgroundColor: "secondary.light", display:"flex", alignItems:'center', justifyContent:'center'}} >
                <Grid container direction="row" sx={{alignItems:"center", display:"flex", justifyContent:'center'}} >
                    <Grid item sx={{alignItems:"center", display:"flex", justifyContent:'center'}}>
                        <img height='290' alt='' src={farmer_image_url}></img>
                       
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="left" sx={{margin: 4, color: "black"}}>
                            {farmer_name}
                        </Typography>
                        <Typography variant="body2" sx={{marginLeft: 4, marginBottom:2}}>
                                    {/* TODO: Change this text/body */}
                                    Bio: {farmer_description}
                        </Typography>
                        <Typography variant="body2" sx={{marginLeft: 4, marginTop:0}}>
                                    {/* TODO: Change this text/body */}
                                    Farm Location: {farmer_location}
                        </Typography>

                    </Grid>        
                </Grid>      
                            
            </Box>
           
                <Typography variant="h5" sx={{margin: 2, color: "black"}}>
                {farmer_first_name}'s Products
                </Typography>
                <Divider />
                <Box sx={{margin: 4}}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                        {products.map((item) => (
                            <Grid item xs={2} sm={3} md={4} key={item.name}>
                                <ProductCard addMode item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Typography variant="h5" sx={{margin: 2, color: "black"}}>
                    Reviews
                </Typography>
                <Divider />
                <Box sx={{margin: 4}}>

                    <Stack spacing={7}  direction="column" sx={{ width: '100%' }}>
                        {reviews.map((item) => (
                            <Stack justifyContent="left" direction="column">
                                <Rating 
                                        readonly
                                        initialValue={item.rating}
                                />
                                <Typography variant="h7" sx={{margin: 1, fontWeight:"bold", color: "black"}}>
                                        {item.title}
                                    </Typography>
                                <Typography variant="h8" sx={{margin: 1, color: "black"}}>
                                    {item.review}
                                </Typography>
                            </Stack>


                        ))}
                
                    </Stack>
                </Box>
                

            </Stack>
        </ThemeProvider>
    );
};

export default FarmerProfileView

