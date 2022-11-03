import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Button} from "@mui/material"

// A general ShoppingCart Button
// Takes 3 props:
// - color: string
// - variant: "contained" | "outlined" | "text"
// - label: string (for button text)
// TODO: Add action to link to sign up page
const ShoppingCartButton = (props) => {
    return (
        <Button color={props.color || "secondary"} variant="contained" sx={{fontWeight: "bold"}}> 
            <ShoppingCartCheckoutIcon />
        </Button>
    )
}

export default ShoppingCartButton