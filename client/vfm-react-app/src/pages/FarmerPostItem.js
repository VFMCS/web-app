import * as React from 'react';
import { useState } from 'react';
import theme from '../css/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment } from '@mui/material';
import UploadButton from '../components/buttons/UploadButton.js';
import ConfirmEditButton from '../components/buttons/ConfirmEditButton.js';
import InputMask from "react-input-mask";
import { Lemon, Apple, Pear, Orange, Grapefruit, Lime, Peaches, Tomato, Blueberry, Cherry, Onion, Garlic, Potato, Asparagus, Celery, Broccoli, Cabbage, Cauliflower }
from '..';


const FarmerPostItem = (props) => {
    document.body.style.margin = "25px";

    const [show, setShow] = useState(true);

    var handleChange = (event) => {
        setShow(prev => false)
        let selection = event.target.value;
        console.log(selection)
        let curObj = { 'Lemon': Lemon, 'Apples': Apple, 'Pears': Pear, 'Oranges': Orange, 'Grapefruit': Grapefruit, 'Lime': Lime, 'Peaches': Peaches, 'Tomatoes': Tomato, 'Blueberries': Blueberry, 'Cherries': Cherry, 'Onion': Onion, 'Garlic': Garlic, 'Potatoes': Potato, 'Asparagus': Asparagus, 'Celery': Celery, 'Broccoli': Broccoli, 'Cabbage': Cabbage, 'Cauliflower': Cauliflower }
        document.getElementById("uploadBox").style.backgroundImage = "url(" + curObj[selection] + ")"
        document.getElementById("uploadBox").style.border = 0
    }
     


    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content'}}>
                <Stack spacing={2} direction="column" sx={{ width: '40%', height: '100%'}}>
                    <div id="uploadBox">
                        {show && <UploadButton id="uploadButton" color="secondary" />}
                    </div>
                </Stack>
                <Stack spacing={2} direction="column" sx={{ width: '60%'}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <Stack spacing={2} direction="row">
                        <TextField type="number" id="outlined-basic" InputProps={{ endAdornment: <InputAdornment position="end">/lb.</InputAdornment>, startAdornment: <InputAdornment position="start">$</InputAdornment> }} label="Price/lb" variant="outlined" sx={{ width: '50%'}}>
                            <InputMask mask="9.99"/>
                        </TextField>
                        <TextField id="outlined-basic" type="number" label="Quantity in lbs." variant="outlined" sx={{ width: '50%'}}/>
                    </Stack>
                    <Stack spacing={2} direction="row">
                    <FormControl sx={{width: '50%'}}>
                            <InputLabel id="demo-simple-select-label" value="Product Type">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                onChange={handleChange}
                                defaultValue = ""
                            >
                                <MenuItem value={'Lemon'}>Lemon</MenuItem>
                                <MenuItem value={'Apples'}>Apples</MenuItem>
                                <MenuItem value={'Pears'}>Pears</MenuItem>
                                <MenuItem value={'Oranges'}>Oranges</MenuItem>
                                <MenuItem value={'Grapefruit'}>Grapefruit</MenuItem>
                                <MenuItem value={'Lime'}>Lime</MenuItem>
                                <MenuItem value={'Peaches'}>Peaches</MenuItem>
                                <MenuItem value={'Tomatoes'}>Tomatoes</MenuItem>
                                <MenuItem value={'Blueberries'}>Blueberries</MenuItem>
                                <MenuItem value={'Cherries'}>Cherries</MenuItem>
                                <MenuItem value={'Onion'}>Onion</MenuItem>
                                <MenuItem value={'Garlic'}>Garlic</MenuItem>
                                <MenuItem value={'Potatoes'}>Potatoes</MenuItem>
                                <MenuItem value={'Asparagus'}>Asparagus</MenuItem>
                                <MenuItem value={'Celery'}>Celery</MenuItem>
                                <MenuItem value={'Broccoli'}>Broccoli</MenuItem>
                                <MenuItem value={'Cabbage'}>Cabbage</MenuItem>
                                <MenuItem value={'Cauliflower'}>Cauliflower</MenuItem>
                            </Select>
                        </FormControl>
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