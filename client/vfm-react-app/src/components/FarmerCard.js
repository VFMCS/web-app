import * as React from 'react' 
import {ThemeProvider, CssBaseline, Typography, Card, CardContent, CardActionArea, CardMedia} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"

// This is a component that displays important information about a product
const FarmerCard = (props) => {
    let item = props.item || {name: "Item", location: "0", description: "This is a description"}
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={basketImage}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.first_name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {props.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.about_me}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default FarmerCard;