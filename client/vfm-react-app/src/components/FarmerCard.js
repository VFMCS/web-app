import * as React from 'react'
import { ThemeProvider, CssBaseline, Typography, Card, CardContent, CardActionArea, CardMedia, Button } from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import { useNavigate } from 'react-router-dom';

// This is a component that displays important information about a farmer

let clickedOnUserId = 0;

const FarmerCard = (props) => {
    //let item = props.item || {name: "Item", location: "0", description: "This is a description"}
    let navigate = useNavigate();
    const toFarmerProfile = () => {
        localStorage.setItem('clicked-on-user-id', props.item.user_id);
        navigate('/farmer-profile');
    };

    let truncate  = str => str.length > 105 ? str.substring(0, 7) + "..." : str;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 290, height: 480}}>
                <CardActionArea disableTouchRipple={true}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.item.image_url}
                    />

                    <CardContent>
                        <Typography textAlign="left" gutterBottom variant="h5" component="div">
                            {props.item.first_name}
                        </Typography>
                        <Typography textAlign="left" gutterBottom variant="subtitle1" component="div">
                            {props.item.location}
                        </Typography>
                        <Typography textAlign="left" variant="body2" color="text.secondary">
                            {truncate(props.item.about_me)}
                        </Typography>

                        <Typography marginTop={2} textAlign="left" variant="subtitle1" color="primary" onClick={toFarmerProfile}>
                            View Profile
                        </Typography>


                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};

export default FarmerCard;