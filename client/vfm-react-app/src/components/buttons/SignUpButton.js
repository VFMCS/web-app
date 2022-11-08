import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

// A general Sign Up Button
// Takes 3 props:
// - color: string
// - variant: "contained" | "outlined" | "text"
// - label: string (for button text)
// TODO: Add action to link to sign up page
const SignUpButton = (props) => {
    let navigate = useNavigate()
    let onClick = () => {
        navigate('/sign-up') // Change to Login (or show Login Modal)
    }
    return (
        <Button data-testid = "signup-button" onClick={onClick} color={props.color || "secondary"} variant={props.variant || "contained"} sx={{fontWeight: "bold"}}> {props.label || "Sign up"} </Button>
    )
}

export default SignUpButton