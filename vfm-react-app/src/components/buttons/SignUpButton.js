import {Button} from "@mui/material"

const SignUpButton = (props) => {
    return (
        <Button color="secondary" variant="contained" sx={{fontWeight: "bold"}}> {props.label || "Sign up"} </Button>
    )
}

export default SignUpButton