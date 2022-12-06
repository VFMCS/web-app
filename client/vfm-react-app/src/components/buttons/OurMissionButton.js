import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

// Our Mission Button
const OurMissionButton = (props) => {
    let navigate = useNavigate()
    let onClick = () => {
        document.getElementById('mission').scrollIntoView()
    }

    return (
        <Button onClick={onClick} color={"success"} variant={props.variant || "text"} sx={{marginRight: 2, fontWeight: "bold"}}> {props.label || "Our Mission" } </Button>
    )
}

export default OurMissionButton
