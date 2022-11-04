import * as React from 'react' 
import {ThemeProvider, CssBaseline, Typography, Card, CardContent, CardActionArea, CardMedia} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"

// This is a component that displays important information about a product
const ProductCard = (props) => {
    //let item = props.item || {name: "Item", price: "0", description: "This is a description"}
    console.log(props);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="200"
                    image={props.item.image_url}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div" >
                            {item.details}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={1}>
                            {" $" + item.price + "/item"}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={-1}>
                            {item.quantity} in Stock
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ProductCard;