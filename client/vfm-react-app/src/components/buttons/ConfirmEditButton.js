import {Button} from "@mui/material";

//Button used on the bottom of the Modify Item screens
//Can be customized as both a 'Save changes' and 'cancel button'
//Used for larger buttons for primary functionalities on webpages
//Takes three props:
//variant: string
//size: string
//color: string
//label: string (will be converted to all caps)

const ConfirmEditButton = (props) => {
    return (
        <Button data-testid="confirm" variant={props.variant || "text"} style={{ height: '100%', width: '50%'}} size={props.size || "medium"} color={props.color || "success"} sx={{fontWeight: "bold"}}>{props.label || "Publish"}</Button>
    )
}

export default ConfirmEditButton;
