import * as React from 'react';
import theme from '../css/theme.js'
import { Stack } from '@mui/system';
import { Button, TextField, ThemeProvider, Box } from '@mui/material';
import UploadButton from '../components/buttons/UploadButton.js';
import ConfirmEditButton from '../components/buttons/ConfirmEditButton.js';
import LoginButton from '../components/buttons/LoginButton.js';




const UploadFile = event => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
}


const FarmerPostItem = () => {
    document.body.style.margin = "25px";
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content'}}>
                <Stack spacing={2} direction="column" sx={{ width: '40%', height: '100%'}}>
                    <Box class="uploadBox" onClick="onClick={()=>console.log('hi')" sx={{ width: '100%', height: '100%', border: '10px dashed grey', p: ['35%', '35%', '35%', '35%',] }}>
                        <UploadButton color="secondary" />
                    </Box >
                </Stack>
                <Stack spacing={2} direction="column" sx={{ width: '60%'}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <Stack spacing={2} direction="row">
                        <TextField id="outlined-basic" label="Price/lb" variant="outlined" sx={{ width: '50%'}}/>
                        <TextField id="outlined-basic" label="Quantity" variant="outlined" sx={{ width: '50%'}}/>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <TextField id="outlined-basic" label="Product Type" variant="outlined" sx={{ width: '50%'}}/>
                        <TextField id="outlined-basic" label="Product Category" variant="outlined" sx={{ width: '50%'}}/>
                    </Stack>
                    <TextField multiline={true} rows={6} id="outlined-basic" label="Description" variant="outlined" />
                    <Stack sx={{height: '60%'}}>
                    </Stack>
                    <Stack sx={{height: "40%"}} direction="row">
                        <ConfirmEditButton variant="contained" color="secondary" label="Publish"></ConfirmEditButton>
                        <ConfirmEditButton color="success" label="Cancel"></ConfirmEditButton>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};


export default FarmerPostItem;