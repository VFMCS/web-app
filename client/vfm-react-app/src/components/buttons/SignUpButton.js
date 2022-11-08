import {Button} from "@mui/material"

// A general Sign Up Button
// Takes 3 props:
// - color: string
// - variant: "contained" | "outlined" | "text"
// - label: string (for button text)
// TODO: Add action to link to sign up page
const SignUpButton = (props) => {
    return (
        <Button data-testid = "signup-button" onClick={onClick} color={props.color || "secondary"} variant={props.variant || "contained"} sx={{fontWeight: "bold"}}> {props.label || "Sign up"} </Button>
    )
}

export default SignUpButton