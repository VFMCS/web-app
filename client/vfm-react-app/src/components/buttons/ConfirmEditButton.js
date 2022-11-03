import {Button} from "@mui/material"

const ConfirmEditButton = (props) => {
    return (
        <Button variant={props.variant || "text"} style={{ height: '100%', width: '50%'}} size={props.size || "medium"} color={props.color || "success"} sx={{fontWeight: "bold"}}>{props.label || "Publish"}</Button>
    )
}

export default ConfirmEditButton;