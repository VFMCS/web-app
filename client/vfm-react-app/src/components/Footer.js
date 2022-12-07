import * as React from 'react' 
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import theme from '../theme/theme.js'


// A Footer Component used for all pages
const Footer = () => {
    
    return (
        <div>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box justifyContent="center" alignItems="center" sx={{backgroundColor: "primary.dark", p: 2, bottom: 0, width: "100vw"}}>
                    <Typography align='center' color={"white"}>
                        Have a question? Please send all inquiries to ____@gmail.com!
                    </Typography>
                    <Typography align='center' color={"white"}>
                        Created in 2022 by VFMCS as a CS320 Project.
                    </Typography>
                    
            </Box>
        </ThemeProvider>
        </div>
    );
};
  
export default Footer;