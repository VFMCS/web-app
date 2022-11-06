import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

// A general Login Button
// Takes 3 props:
// - color: string
// - variant: "contained" | "outlined" | "text"
// - label: string (for button text)
// TODO: Add action to link to login page
const LoginButton = (props) => {
    let navigate = useNavigate()
    let onClick = () => {
        navigate('/sign-in') // Change to Login (or show Login Modal)
    }
    return (
        <Button onClick={onClick} color={props.color || "success"} variant={props.variant || "text"} sx={{marginRight: 2, fontWeight: "bold"}}> {props.label || "Login" } </Button>
    )
}

export default LoginButton
