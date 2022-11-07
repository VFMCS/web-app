import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Modal, Box, Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import UploadButton from './buttons/UploadButton.js';

// Upload Image Code based on:
// https://plainenglish.io/blog/how-to-add-a-file-input-button-and-display-a-preview-image-with-react-2568d9d849f5


const FarmerProfileModal = ({open, setModalState, onClose, editMode, defaultProfile}) => {

    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showEmptyEntryError, setShowEmptyEntryError] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    let profile = {name: "", location: "", description: "", image: ""}

    var handleImageChange = (event) => {
        setShowUploadButton(false)
        console.log(event.target.files[0])
        setSelectedImage(event.target.files[0])
        document.getElementById("uploadBox").style.border = 0
    }

    React.useEffect(() => {
        if (selectedImage) {
            let newUrl = URL.createObjectURL(selectedImage)
            setImageUrl(newUrl);
        }
    }, [selectedImage]);
    

    var onSubmit = () => {
        // if profile is valid
        // trigger onClose and pass back updated profile
        // otherwise display error message
        console.log(profile)
        profile["image"] = imageUrl
        if (Object.values(profile).includes("")) {
            setShowEmptyEntryError(true)
            console.log("Invalid Input")
            return
        }
        setShowEmptyEntryError(false)
        // POST or PATCH profile here
        setModalState(false)
        onClose()
    }

    var handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(value)
        profile[name] = value    
        console.log(profile)
    }

    return (
        <Modal open={open} onClose={onClose} closeAfterTransition sx={{display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: (theme) => theme.shadows[5],
                p: 4,
                width: 1/2
                }}>
                <ThemeProvider theme={theme}>
                    <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content'}}>
                        <Stack spacing={2} direction="column" sx={{ width: '50%', height: '100%'}}>
                            {showUploadButton &&
                            <div id="uploadBox">
                                 <UploadButton id="uploadButton" onChange={handleImageChange} color="secondary" />
                            </div>}
                            {imageUrl && selectedImage && (
                                    <img src={imageUrl} alt={selectedImage.name} width="100%"/>
                            )}
                        </Stack>
                        <Stack spacing={2} direction="column" >
                            <TextField required name="name" onChange={handleChange} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField required name="location" onChange={handleChange} id="outlined-basic" label="Location" variant="outlined" />
                            <TextField required onChange={handleChange} name="description" multiline={true} rows={6} id="outlined-basic" label="Description" variant="outlined" />
                            <Stack sx={{height: '60%'}}>
                                <p style={{color: "tomato"}}>
                                    {showEmptyEntryError && "You have invalid or missing data"}
                                </p>
                            </Stack>
                            <Stack sx={{height: "40%"}} direction="row">
                                <Button onClick={onSubmit} variant= "contained" style={{ height: '100%', width: '50%'}} size="medium" color="success" sx={{fontWeight: "bold"}}>Submit</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </ThemeProvider>
            </Box>
        </Modal>
    );
};


export default FarmerProfileModal;