import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Box, Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import UploadButton from './buttons/UploadButton.js';

// Upload Image Code based on:
// https://plainenglish.io/blog/how-to-add-a-file-input-button-and-display-a-preview-image-with-react-2568d9d849f5


const FarmerProfileEdit = (props) => {

    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showEmptyEntryError, setShowEmptyEntryError] = useState("");
    const [profile, setProfile] = useState({  });
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    var handleImageChange = (event) => {
        setShowUploadButton(false)
        document.getElementById("uploadBox").style.backgroundImage = event.target.files[0]
        console.log(event.target.files[0])
        setSelectedImage(event.target.files[0])
        document.getElementById("uploadBox").style.border = 0
    }

    React.useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);
    

    var onSubmit = () => {
        // if profile is valid
        // trigger onClose and pass back updated profile
        // otherwise display error message
    }

    var handleChange = (e) => {
        // set profile attributes for each item
    }

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content'}}>
                <Stack spacing={2} direction="column" sx={{ width: '100%', height: '100%'}}>
                    <div id="uploadBox">
                        {showUploadButton && <UploadButton id="uploadButton" onChange={handleImageChange} color="secondary" />}
                        {imageUrl && selectedImage && (
                            <img src={imageUrl} alt={selectedImage.name} height="100px"/>
                        )}
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
                        <Button onClick={onSubmit} variant= "contained" style={{ height: '100%', width: '50%'}} size="medium" color="success" sx={{fontWeight: "bold"}}>Submit</Button>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};


export default FarmerProfileEdit;