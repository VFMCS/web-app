import * as React from 'react' 
import {ThemeProvider, CssBaseline, Typography, Paper, Card, CardContent, CardActionArea, CardMedia, Fab, Box, Modal} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import EditIcon from "@mui/icons-material/Edit"
import FarmerPostItem from './FarmerPostItem';

// This is a component that displays important information about a product
const ProductCard = (props) => {
    //let item = props.item || {name: "Item", price: "0", description: "This is a description"}
    let [modalOpen, setModalState] = React.useState(false);
    let toPostItem = () => setModalState(true)

    return (
        <ThemeProvider data-testid="product-card" theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea disableTouchRipple={props.editMode}>
                    <CardMedia
                    component="img"
                    height="220"
                    image={props.item.image_url}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div" >
                            {props.item.details}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={1}>
                            {" $" + props.item.price + "/item"}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" margin={-1}>
                            {props.item.quantity} in Stock
                        </Typography>
                        {props.editMode &&
                            <Box>
                                <Fab color="secondary" aria-label="edit" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16}}
                                onClick={toPostItem}>
                                    <EditIcon />
                                </Fab>
                                <Modal open={modalOpen} onClose={() => setModalState(false)} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Box sx={{
                                        position: 'relative',
                                        bgcolor: 'background.paper',
                                        border: '2px solid #000',
                                        boxShadow: (theme) => theme.shadows[5],
                                        p: 4,
                                        }}>
                                            <FarmerPostItem initItem={props.item} setModalState={setModalState} editMode/> {/* Update to support editing mode */}
                                    </Box>
                                </Modal>
                            </Box>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ProductCard;