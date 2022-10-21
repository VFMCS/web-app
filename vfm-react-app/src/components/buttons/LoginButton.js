import {Button} from "@mui/material"

const LoginButton = (props) => {
    return (
        <Button color="success" sx={{marginRight: 2, fontWeight: "bold"}}> {props.label || "Login" } </Button>
    )
}

export default LoginButton
