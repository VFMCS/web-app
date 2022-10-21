import {Button} from "@mui/material"

// A general Login Button
// Takes 3 props:
// - color: string
// - variant: "contained" | "outlined" | "text"
// - label: string (for button text)
// TODO: Add action to link to login page
const LoginButton = (props) => {
    return (
        <Button color={props.color || "success"} variant={props.variant || "text"} sx={{marginRight: 2, fontWeight: "bold"}}> {props.label || "Login" } </Button>
    )
}

export default LoginButton
