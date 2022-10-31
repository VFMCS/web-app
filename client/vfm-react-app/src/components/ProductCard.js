import * as React from 'react' 
import { Stack, ThemeProvider, CssBaseline, Typography, IconButton, Card, CardContent, CardActionArea, CardMedia} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../css/theme"
import MenuIcon from "@mui/icons-material/Menu"
import SignUpButton from './buttons/SignUpButton';
import LoginButton from './buttons/LoginButton';

// A Header Component used for the General Landing Page
// Contains a Menu Item, the logo/title, sign up button, and login button
const ProductCard = (props) => {
    let item = props.item || {name: "Item", price: "0", description: "This is a description"}
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
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {" $" + item.price + "/item"}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            3 in Stock
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ProductCard;