import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Lemon, Apple, Pear, Orange, Grapefruit, Lime, Peaches, Tomato, Blueberry, Cherry, Onion, Garlic, Potato, Asparagus, Celery, Broccoli, Cabbage, Cauliflower }
    from '..';

import { useNavigate } from 'react-router-dom';


// TODO: Update to support editing items
const FarmerPostItem = ({ editMode, setModalState, initItem }) => {
    const navigate = useNavigate();
    
    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showPriceValidError, setShowPriceValidError] = useState(false);
    const [showEmptyEntryError, setShowEmptyEntryError] = useState("");
    const [typeEvent, setTypeEvent] = useState(null);
    const [uploadMode, setUploadMode] = useState(false);
    const [uploadImage, setUploadImage] = useState(null)
    const [showBox, setShowBox] = useState(true)
	const [curImage, setCurImage] = useState(new FormData())
	const [switchStatus, setSwitchStatus] = useState(true)
	const [test, setTest] = useState("")
    //here, we initially set the vendor_id to what we need it to be


    const [item, setItem] = useState(editMode ? initItem : {
        'vendor_id': localStorage.getItem('curr_user_id'),
        'product_type': null,
        'quantity': null,
        'price': null,
        'product_category': null,
        'details': null,
        'name': null,
		'photo': null
        });

    var defaultImageCheck = () => {
        setUploadMode(!uploadMode)
		setSwitchStatus(!switchStatus)
        if(uploadMode){
            setShowBox(true)
            setShowUploadButton(true)
            setUploadImage(null)
        }
        else{
            if(typeEvent.target.value != null){
                setShowBox(true)
                setShowUploadButton(false)
                handleDefaultImageChange(typeEvent)
            }
            else{
                setShowBox(true)
                setShowUploadButton(false)
                setUploadImage(null)
            }

        }
    }

    var handleDefaultImageChange = (event) => {
        let selection = event.target.value;
        let curObj = { 'Lemon': Lemon, 'Apples': Apple, 'Pears': Pear, 'Oranges': Orange, 'Grapefruit': Grapefruit, 'Lime': Lime, 'Peaches': Peaches, 'Tomatoes': Tomato, 'Blueberries': Blueberry, 'Cherries': Cherry, 'Onion': Onion, 'Garlic': Garlic, 'Potatoes': Potato, 'Asparagus': Asparagus, 'Celery': Celery, 'Broccoli': Broccoli, 'Cabbage': Cabbage, 'Cauliflower': Cauliflower }
        setShowBox(false)
        setShowUploadButton(false)
        setUploadImage(curObj[selection])
    }

    var handleImageUpload = (event) => {
        var file = event.target.files[0];
		console.log(file)
		const formData = new FormData();
		formData.append("product", file);
		console.log(formData)

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
            // convert image file to base64 string
            const imgResult = reader.result
            setUploadImage(imgResult)
            setShowBox(false)
            setShowUploadButton(false)
        }, false);
		setCurImage(formData)
		console.log(curImage)
		console.log("fuck")
	}

    var errorExp = ""
    var onSave = async () => {
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
		if (switchStatus === true){
			if(showUploadButton === true){
				valid = false
				errorExp = errorExp + "validimg "
			}
		}
        if (valid) {
            errorExp = ""
            setShowEmptyEntryError("")
            //save to database
            console.log(item)
            console.log(editMode)
            if(!editMode){
                console.log("curr_user_id: " + localStorage.getItem('curr_user_id'));
				fetch("http://localhost:3001/api/cloudinary/upload-product/"+localStorage.getItem('curr_user_id'), { method: "POST", body: curImage})
                .then(res => res.json())
				.then(data => {
					item["photo"] = data.result
					fetch("http://localhost:3001/api/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data))
					setModalState(false);
					window.location.reload(false)
					navigate('/farmer');
				})
                //fetch("http://localhost:3001/api/products", { method: "GET" }).then(data => console.log(data))
				//fetch("http://localhost:3001/api/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
                //fetch("http://localhost:3001/api/products", { method: "GET" }).then(data => console.log(data))
                //setModalState(false);
                //window.location.reload(false)
                //navigate('/farmer');
            }
            else{
                const url = "http://localhost:3001/api/products/patch/" + item.product_id
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

    var handleTextChange = (e) => {

        var name = e.target.name
        var value = e.target.value
        var valid = true

        if (name === "product_type") {
            setTypeEvent(e)
			if(switchStatus === false){
	            handleDefaultImageChange(e)
			}
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
                    {showBox && (<div id="uploadBox">
                        {showUploadButton && (<Button data-testid = "upload" color="secondary" sx={{ p: '5', width: '100%', height: '100%'}} variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" encType='multipart/form-data' onChange={handleImageUpload}/>
                        </Button>)}
                    </div>)}
                    {uploadImage && (<img alt="sampleImg}" src={uploadImage} id="imageUpload"/>)}
                    <FormControlLabel onChange={defaultImageCheck} sx={{ left: "50%" }} control={<Switch defaultChecked />} labelPlacement="bottom" label="Use Default Image" />
                </Stack>
                <Stack spacing={2} direction="column" sx={{ width: '60%' }}>
                    <TextField name="name" onChange={handleTextChange} defaultValue={item["name"]} id="outlined-basic" label="Name" variant="outlined" />
                    <Stack spacing={2} direction="row">
                        <TextField onChange={handleTextChange} name='price' defaultValue={item["price"]} type="number" id="outlined-basic" InputProps={{ endAdornment: <InputAdornment position="end">/lb.</InputAdornment>, startAdornment: <InputAdornment position="start">$</InputAdornment> }} label="Price/lb" variant="outlined" sx={{ width: '50%' }}>
                        </TextField>
                        <TextField onChange={handleTextChange} defaultValue={item["quantity"]} name='quantity' id="outlined-basic" type="number" label="Quantity in lbs." variant="outlined" sx={{ width: '50%' }} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <FormControl sx={{ width: '50%' }}>
                            <InputLabel id="demo-simple-select-label" value="Product Type">Type</InputLabel>
                            <Select
                                name='product_type'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleTextChange}
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
                        <TextField onChange={handleTextChange} name="product_category" id="outlined-basic" label="Product Category" defaultValue={item["product_category"]} variant="outlined" sx={{ width: '50%' }} />
                    </Stack>
                    <TextField onChange={handleTextChange} name="details" multiline={true} rows={6} id="outlined-basic" defaultValue={item["details"]} label="Details" variant="outlined" />
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
