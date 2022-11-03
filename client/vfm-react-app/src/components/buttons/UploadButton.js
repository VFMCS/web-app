import {Button} from "@mui/material"



const UploadButton = (props) => {
    return (<Button onclick="imageUploader.handleUploadClick()" color={props.color || "secondary"} sx={{ p: '5', width: '100%', height: '100%'}} variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                        </Button>)
    }

export default UploadButton;