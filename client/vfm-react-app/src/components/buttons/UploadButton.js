import {Button} from "@mui/material"

//An button used to designate upload images
//takes 1 prop:
//color: string


const UploadButton = (props) => {
    return (<Button data-testid = "upload" color={props.color || "secondary"} sx={{ p: '5', width: '100%', height: '100%'}} variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" onChange={props.onChange || (() => false)}/>
                        </Button>)
    }

export default UploadButton;