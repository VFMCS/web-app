import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Divider} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader.js';

//Customer landing page upon customer being signed in

const FarmerDashboard = (props) => {
    return (
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
            <FarmerHeader />
            <Typography variant="h5" sx={{margin: 2, color: "primary.main"}}>
                Dashboard
            </Typography>
            <Divider />
            <Box sx={{margin: 4}}>
                
            </Box>
            </Stack>
        </ThemeProvider>
    );
};

export default FarmerDashboard

