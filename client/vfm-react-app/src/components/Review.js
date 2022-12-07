import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Lemon, Apple, Pear, Orange, Grapefruit, Lime, Peaches, Tomato, Blueberry, Cherry, Onion, Garlic, Potato, Asparagus, Celery, Broccoli, Cabbage, Cauliflower }
    from '..';
import StarRatingComponent from "react-star-rating-component-new";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom';
import {reviewee} from './ProductCardReserved'


// TODO: Update to support editing items
const Review = ({ editMode, setModalState, initItem }) => {
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [reviewer, setReviewer] = useState(parseInt(localStorage.getItem('curr_user_id')));

    
    var errorExp = ""
    var onSave = () => {
        console.log('saving');
        //bug
        let full_review = {'rating': rating, 'reviewer': reviewer, 'reviewee': reviewee,'review': review};

        fetch("http://localhost:3001/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(full_review)}).then(data => {console.log(data)});
        setModalState(false);
    }

    var onCancel = () => {
        setModalState(false);
    }

    var handleTextChange = (e) => {
        setReview(e.target.value);

    }

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }

    // Optional callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)


    return (
        <ThemeProvider theme={theme}>
                <Stack spacing={2}  direction="column" sx={{ width: '100%' }}>
                <center>
                    <Stack spacing={2}  direction="row" sx={{ width: '100%' }}>
                        <Rating 
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            /* Available Props */
                        />
                    </Stack>
                </center>
                    <TextField onChange={handleTextChange} name="details" multiline={true} rows={6} id="outlined-basic" defaultValue={''} label="Details" variant="outlined" />
                    <Stack sx={{ height: "40%" }} direction="row">
                        <Button onClick={onSave} variant="contained" style={{ height: '100%', width: '50%' }} size="medium" color="success" sx={{ fontWeight: "bold" }}>{editMode ? "Update" : "Publish"}</Button>
                        <Button onClick={onCancel} variant="text" style={{ height: '100%', width: '50%' }} size="medium" color="success" sx={{ fontWeight: "bold" }}>Cancel</Button>
                    </Stack>
                </Stack>
            
        </ThemeProvider>
    );
};


export default Review;
