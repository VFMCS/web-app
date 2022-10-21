import {Button} from "@mui/material"

const SignUpButton = (props) => {
    return (
        <Button color={props.color || "secondary"} variant={props.variant || "contained"} sx={{fontWeight: "bold"}}> {props.label || "Sign up"} </Button>
    )
}

export default SignUpButton