import * as React from 'react' 
import {Button, ThemeProvider, CssBaseline, Typography, Paper, Card, CardContent, CardActionArea, CardMedia, Fab, Box, Modal} from '@mui/material';
import basketImage from "../images/vegetable-basket.png"
import theme from "../theme/theme"
import EditIcon from "@mui/icons-material/Edit"
import FarmerPostItem from './FarmerPostItem';
import AddIcon from '@mui/icons-material/Add';
import ShoppingSidebar from './sidebars/ShoppingSidebar';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';


// This is a component that displays important information about a product
const ReviewCard = (props) => {
    //let item = props.item;
    let [modalOpen, setModalState] = React.useState(false);
    let toPostItem = () => setModalState(true)
    let [shoppingSidebarOpen, setShoppingSidebarOpen] = React.useState(false);
    const [farmer_name, setFarmerName] = React.useState("");

    React.useEffect(() => {
        //get farmer's details
        let url = 'http://localhost:5001/curr-user-api/' + props.item.vendor_id;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {setFarmerName(data[0].first_name + " " + data[0].last_name)})
            .catch(err => console.error(err));
    }, [])

    return (
        <ThemeProvider data-testid="product-card" theme={theme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ maxWidth: 260 }}>
                <CardActionArea disableTouchRipple={true}>
                    <CardMedia
                    component="img"
                    height="220"
                    image={props.item.image_url}
                    alt="Product Image"
                    />
                    <CardContent>
                        <Typography textAlign="left" gutterBottom variant="h5" component="div">
                            {props.item.name}
                        </Typography>
                        
                        <Typography textAlign="left" gutterBottom variant="subtitle1" component="div">
                            {" $" + props.item.price + "/lb"}
                        </Typography>
                        <Typography textAlign="left" gutterBottom variant="subtitle1" component="div">
                            {props.item.quantity} lb in Stock
                        </Typography>

                        <Typography sx={{textDecoration: 'underline'}} marginTop={2} textAlign="left" variant="subtitle1" color="primary" onClick={toFarmer(props.item)}>
                            {farmer_name}
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
                                         width: '1000px',
                                         height: '650px',
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
                        {props.addMode &&
                            <Box>
                                <Fab color="primary" aria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16}}
                                onClick={toAddItem}>
                                    <AddIcon />
                                </Fab>
                                <ShoppingSidebar isOpen={shoppingSidebarOpen} toggle= {toggleShoppingSidebar} onClose={() => setShoppingSidebarOpen(false)}/>                   
                            </Box>
                        }

                        {props.reserveRequestMode &&
                            <Box>
                                <Fab color="primary" aria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                left: 16,
                                }}
                                onClick={toAcceptItem(props.item)}>
                                    <CheckIcon />
                                </Fab>

                                <Fab color="secondary" ria-label="add" sx={{position: 'absolute',
                                bottom: 16,
                                right: 16,
                                }}
                                onClick={toRejectItem(props.item)}>
                                    <CloseIcon />
                                </Fab>
                                <ShoppingSidebar isOpen={shoppingSidebarOpen} toggle= {toggleShoppingSidebar} onClose={() => setShoppingSidebarOpen(false)}/>
                                    
                                
                            </Box>
                        }

                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};
  
export default ReviewCard;
