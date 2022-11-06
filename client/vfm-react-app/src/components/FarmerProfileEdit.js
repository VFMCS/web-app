import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import UploadButton from './buttons/UploadButton.js';
import ConfirmEditButton from './buttons/ConfirmEditButton.js';
import { Lemon, Apple, Pear, Orange, Grapefruit, Lime, Peaches, Tomato, Blueberry, Cherry, Onion, Garlic, Potato, Asparagus, Celery, Broccoli, Cabbage, Cauliflower }
from '..';



const FarmerProfileEdit = (props) => {
    document.body.style.margin = "25px";

    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showEmptyEntryError, setShowEmptyEntryError] = useState("");
    const [profile, setProfile] = useState({  });

    var handleImageChange = (event) => {
        setShowUploadButton(false)
        document.getElementById("uploadBox").style.backgroundImage = event.target.files[0]
        console.log(event.target.files[0])
        document.getElementById("uploadBox").style.border = 0
    }

    var errorExp = ""

    var onSave = () => {

    }

    var handleChange = (e) => {
        
    }

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content'}}>
                <Stack spacing={2} direction="column" sx={{ width: '100%', height: '100%'}}>
                    <div id="uploadBox">
                        {showUploadButton && <UploadButton id="uploadButton" onChange={handleImageChange} color="secondary" />}
                    </div>
                </Stack>
                <Stack spacing={2} direction="column" >
                    <TextField name="name" onChange={handleChange} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField name="location" onChange={handleChange} id="outlined-basic" label="Location" variant="outlined" />
                    <TextField onChange={handleChange} name="details" multiline={true} rows={6} id="outlined-basic" label="Description" variant="outlined" />
                    <Stack sx={{height: '60%'}}>
                        <p style={{color: "tomato"}}>
                            {showEmptyEntryError}
                        </p>
                    </Stack>
                    <Stack sx={{height: "40%"}} direction="row">
                        <Button onClick={onSave} variant= "contained" style={{ height: '100%', width: '50%'}} size="medium" color="success" sx={{fontWeight: "bold"}}>Submit</Button>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};


export default FarmerProfileEdit;