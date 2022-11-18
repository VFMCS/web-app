import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import UploadButton from '../components/buttons/UploadButton.js';
import ConfirmEditButton from '../components/buttons/ConfirmEditButton.js';
import { Lemon, Apple, Pear, Orange, Grapefruit, Lime, Peaches, Tomato, Blueberry, Cherry, Onion, Garlic, Potato, Asparagus, Celery, Broccoli, Cabbage, Cauliflower }
    from '..';

import { useNavigate } from 'react-router-dom';


// TODO: Update to support editing items
const FarmerPostItem = ({ editMode, currentItem, setModalState, initItem}) => {
    const navigate = useNavigate();
    
    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showPriceValidError, setShowPriceValidError] = useState(false);
    const [showEmptyEntryError, setShowEmptyEntryError] = useState("");
    //here, we initially set the vendor_id to what we need it to be

    

    const [item, setItem] = useState(editMode ? initItem : {
        'vendor_id': localStorage.getItem('curr_user_id'),
        'product_type': null,
        'quantity': null,
        'price': null,
        'product_category': null,
        'description': null,
        'name': null
    });

    var handleImageChange = (event) => {
        setShowUploadButton(prev => false)
        let selection = event.target.value;
        console.log(selection)
        let curObj = { 'Lemon': Lemon, 'Apples': Apple, 'Pears': Pear, 'Oranges': Orange, 'Grapefruit': Grapefruit, 'Lime': Lime, 'Peaches': Peaches, 'Tomatoes': Tomato, 'Blueberries': Blueberry, 'Cherries': Cherry, 'Onion': Onion, 'Garlic': Garlic, 'Potatoes': Potato, 'Asparagus': Asparagus, 'Celery': Celery, 'Broccoli': Broccoli, 'Cabbage': Cabbage, 'Cauliflower': Cauliflower }
        document.getElementById("uploadBox").style.backgroundImage = "url(" + curObj[selection] + ")"
        document.getElementById("uploadBox").style.border = 0
    }

    var errorExp = ""

    var onSave = () => {
        var valid = true
        if (item["name"] === null) {
            errorExp = errorExp + "name ";
            valid = false;
        }
        if (item["quantity"] === null) {
            errorExp = errorExp + "quantity "
            valid = false;
        }
        if (item["price"] === null) {
            errorExp = errorExp + "price "
            valid = false;
        }
        const value = item["price"]
        if (!(/^[0-9]*.[0-9][0-9]$/.test(value)) && !(/^[0-9]+$/.test(value))) {
            setShowPriceValidError(prev => true)
            valid = false;
        }
        else {
            setShowPriceValidError(prev => false)
            item["price"] = parseFloat(value)
        }
        if (valid) {
            console.log(item)
            errorExp = ""
            setShowEmptyEntryError("")
            //save to database
            console.log(editMode)
            console.log(item)
            if(!editMode){
                console.log("curr_user_id: " + localStorage.getItem('curr_user_id'));
                fetch("http://localhost:3001/api/products", { method: "GET" }).then(data => console.log(data));
                fetch("http://localhost:3001/api/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
                fetch("http://localhost:3001/api/products", { method: "GET" }).then(data => console.log(data));
                setModalState(false);
                window.location.reload(false)
                navigate('/farmer');
            }
            else{
                const url = "https://localhost:3001/api/products/" + item.product_id
                fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
                setModalState(false);
                window.location.reload(false)
                navigate('/farmer');
            }
        }
        else {
            if (errorExp !== "") {
                setShowEmptyEntryError("The following fields need to be filled: " + errorExp)
            }
        }
    }

    var onCancel = () => {
        setModalState(false);
    }

    var handleChange = (e) => {

        var name = e.target.name
        var value = e.target.value
        var valid = true

        if (name === "product_type") {
            handleImageChange(e)
        }
        if (name === 'name') {
            if (value.length === 0) {
                valid = false
            }
        }
        if (name === 'price') {
            if (value.length === 0) {
                valid = false
            }
        }
        else if (name === 'quantity') {
            if (value.length === 0) {
                valid = false
            }
        }
        if (valid) {
            item[name] = value
            //console.log(item)
        }
        else {
            item[name] = null
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" sx={{ width: '100%', height: 'max-content' }}>
                <Stack spacing={2} direction="column" sx={{ width: '40%', height: '100%' }}>
                    <div id="uploadBox">
                        {showUploadButton && <UploadButton id="uploadButton" color="secondary" />}
                    </div>
                </Stack>
                <Stack spacing={2} direction="column" sx={{ width: '60%' }}>
                    <TextField name="name" onChange={handleChange} defaultValue={item["name"]} id="outlined-basic" label="Name" variant="outlined" />
                    <Stack spacing={2} direction="row">
                        <TextField onChange={handleChange} name='price' defaultValue={item["price"]} type="number" id="outlined-basic" InputProps={{ endAdornment: <InputAdornment position="end">/lb.</InputAdornment>, startAdornment: <InputAdornment position="start">$</InputAdornment> }} label="Price/lb" variant="outlined" sx={{ width: '50%' }}>
                        </TextField>
                        <TextField onChange={handleChange} defaultValue={item["quantity"]} name='quantity' id="outlined-basic" type="number" label="Quantity in lbs." variant="outlined" sx={{ width: '50%' }} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <FormControl sx={{ width: '50%' }}>
                            <InputLabel id="demo-simple-select-label" value="Product Type">Type</InputLabel>
                            <Select
                                name='product_type'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                                defaultValue={item["product_type"]}
                            >
                                <MenuItem value={'Lemon'}>Lemon</MenuItem>
                                <MenuItem value={'Apples'}>Apples</MenuItem>
                                <MenuItem value={'Pears'}>Pears</MenuItem>
                                <MenuItem value={'Oranges'}>Oranges</MenuItem>
                                <MenuItem value={'Grapefruit'}>Grapefruit</MenuItem>
                                <MenuItem value={'Lime'}>Lime</MenuItem>
                                <MenuItem value={'Peaches'}>Peaches</MenuItem>
                                <MenuItem value={'Tomatoes'}>Tomatoes</MenuItem>
                                <MenuItem value={'Blueberries'}>Blueberries</MenuItem>
                                <MenuItem value={'Cherries'}>Cherries</MenuItem>
                                <MenuItem value={'Onion'}>Onion</MenuItem>
                                <MenuItem value={'Garlic'}>Garlic</MenuItem>
                                <MenuItem value={'Potatoes'}>Potatoes</MenuItem>
                                <MenuItem value={'Asparagus'}>Asparagus</MenuItem>
                                <MenuItem value={'Celery'}>Celery</MenuItem>
                                <MenuItem value={'Broccoli'}>Broccoli</MenuItem>
                                <MenuItem value={'Cabbage'}>Cabbage</MenuItem>
                                <MenuItem value={'Cauliflower'}>Cauliflower</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField onChange={handleChange} name="product_category" id="outlined-basic" label="Product Category" defaultValue={item["product_category"]} variant="outlined" sx={{ width: '50%' }} />
                    </Stack>
                    <TextField onChange={handleChange} name="details" multiline={true} rows={6} id="outlined-basic" defaultValue={item["description"]} label="Description" variant="outlined" />
                    <Stack sx={{ height: '60%' }}>
                        <p style={{ color: "tomato" }}>
                            {showEmptyEntryError}
                        </p>
                        {showPriceValidError && <p style={{ color: "tomato" }}>Please input a valid price</p>}
                    </Stack>
                    <Stack sx={{ height: "40%" }} direction="row">
                        <Button onClick={onSave} variant="contained" style={{ height: '100%', width: '50%' }} size="medium" color="success" sx={{ fontWeight: "bold" }}>{editMode ? "Update" : "Publish"}</Button>
                        <Button onClick={onCancel} variant="text" style={{ height: '100%', width: '50%' }} size="medium" color="success" sx={{ fontWeight: "bold" }}>Cancel</Button>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};


export default FarmerPostItem;
