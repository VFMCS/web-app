import * as React from 'react'
import { ThemeProvider, CssBaseline, Typography, Card, CardContent, CardActionArea, CardMedia, Button } from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import { useNavigate } from 'react-router-dom';

// This is a component that displays important information about a product
const FarmerCard = (props) => {
    //let item = props.item || {name: "Item", location: "0", description: "This is a description"}
    let navigate = useNavigate();
    const toFarmerProfile = () => {
        navigate('/farmer-profile')
    };
    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.item.image_url}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.item.first_name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {props.item.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.item.about_me}
                        </Typography>
                        <Button onClick={toFarmerProfile}>
                            <Typography sx={{ color: "primary.dark", fontWeight: "bold" }}>
                                View Profile
                            </Typography>
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};

export default FarmerCard;