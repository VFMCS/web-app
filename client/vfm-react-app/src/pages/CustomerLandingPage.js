import * as React from 'react' 
import LandingHeader from '../components/LandingHeader.js';
import {Box, ThemeProvider, CssBaseline, ImageList, Typography} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../css/theme.js'
import SignUpButton from '../components/buttons/SignUpButton.js';
import LoginButton from '../components/buttons/LoginButton.js';

//Customer landing page upon customer being signed in

const CustomerLandingPage = () => {
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                <LandingHeader />
                <Typography>
                    Featured Farmers
                </Typography>
                <Box sx={{backgroundColor: "secondary.light"}}>
                    {/*<ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} />
                            </ImageListItem>
                        ))}
                        </ImageList>*/}
                </Box>
                

            </Stack>
        </ThemeProvider>
    
    


    );
};

export default CustomerLandingPage

