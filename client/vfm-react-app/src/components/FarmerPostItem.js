import * as React from 'react';
import { useState, Component } from 'react';
import theme from '../theme/theme.js'
import { Stack } from '@mui/system';
import { Select, MenuItem, InputLabel, FormControl, TextField, ThemeProvider, InputAdornment, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';


//Modal for uploading items on the farmer side
const FarmerPostItem = ({ editMode, setModalState, initItem }) => {
    const navigate = useNavigate();
    
    const [showUploadButton, setShowUploadButton] = useState(true); //Hook for showing upload button when no image is uploaded
    const [showPriceValidError, setShowPriceValidError] = useState(false); //Shows an error when user doesn't input a valid price in form of _.__
    const [showEmptyEntryError, setShowEmptyEntryError] = useState(""); //Shows an error when a required field is left empty
    const [typeEvent, setTypeEvent] = useState(null); //Event for changing the image if
    const [uploadMode, setUploadMode] = useState(false);
    const [uploadImage, setUploadImage] = useState(null)
    const [showBox, setShowBox] = useState(true)
	const [curImage, setCurImage] = useState(new FormData())
	const [switchStatus, setSwitchStatus] = useState(true)
	const [imgChanged, setImgChanged] = useState(false);
    const [stockImg, setStockImg] = useState(false);
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

    let curObj = {  'Lemon': "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg", 
                        'Apples': "https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg", 
                        'Pears': "https://rainierfruit.com/wp-content/uploads/2021/10/Rainier-Fruit-Pears.png", 
                        'Oranges': "https://www.collinsdictionary.com/images/full/orange_342874121.jpg", 
                        'Grapefruit': "https://cdn.shopify.com/s/files/1/2045/8185/products/9449104_600x600.png?v=1598374091", 
                        'Lime': "https://cdn.britannica.com/90/80590-050-F94F0332/Limes-peels-pulp-sections.jpg", 
                        'Peaches': "https://www.tastingtable.com/img/gallery/what-peach-rankings-really-mean/l-intro-1663616604.jpg", 
                        'Tomatoes': "https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg", 
                        'Blueberries': "http://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_167872100blueberry1_1024x1024.jpg?v=1531795854", 
                        'Cherries': "https://www.tastingtable.com/img/gallery/how-to-pick-out-the-best-fresh-cherries/intro-1655490775.webp", 
                        'Onion': "https://www.tastingtable.com/img/gallery/the-most-popular-types-of-onions-explained/yellow-onion-1649945533.jpg", 
                        'Garlic': "https://post.healthline.com/wp-content/uploads/2018/06/garlic-1200x628-facebook-1200x628.jpg", 
                        'Potatoes': "https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg", 
                        'Asparagus': "https://www.feastingathome.com/wp-content/uploads/2020/03/roasted-asparagus-7-1.jpg", 
                        'Celery': "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Celery-stalks-and-leaves-7860193.jpg?quality=90&resize=556,505", 
                        'Broccoli': "https://www.savoryonline.com/app/uploads/recipes/154194/blanched-broccoli-florets-2-1256x1256-c-default.jpg", 
                        'Cabbage': "https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg", 
                        'Cauliflower': "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/cauliflower_commodity-page.png" 
    }


    var defaultImageCheck = () => {
        setUploadMode(!uploadMode)
		setSwitchStatus(!switchStatus)
        if(uploadMode){
            setShowBox(true)
            setShowUploadButton(true)
            setUploadImage(null)
            setStockImg(false)
            setImgChanged(false)
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
        setShowBox(false)
        setShowUploadButton(false)
        setUploadImage(curObj[selection])
        setStockImg(true)
        setImgChanged(true)

    }

    var handleImageUpload = (event) => {
        var file = event.target.files[0];
		const formData = new FormData();
		formData.append("product", file);

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
		setImgChanged(true)
	}

    
    var onSave = async () => {
        var errorExp = ""
        var errorArr = [];
        var valid = true
        if (item["name"] === null) {
            errorArr.push("Name");
            valid = false;
        }
        if (item["quantity"] === null) {
            errorArr.push("Quantity");
            valid = false;
        }
        if (item["price"] === null) {
            errorArr.push("Price") 
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
			if(!editMode && showUploadButton === true){
				valid = false
				errorArr.push("Valid Image")
			}
        }
        for(var i = 0; i < errorArr.length; ++i){
            errorExp = errorExp + errorArr[i]
            if(i != errorArr.length - 1){
                errorExp = errorExp + ", "
            }
        }
        if (valid) {
            errorExp = ""
            setShowEmptyEntryError("")
            //save to database
            if(!editMode){
                if(!stockImg){
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
                }
                else{
                    item["photo"] = curObj[item["product_type"]]
                    fetch("http://localhost:3001/api/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data))
                    setModalState(false);
                    window.location.reload(false)
                    navigate('/farmer');
                }
            }
            else{
				console.log(item)
                const url = "http://localhost:3001/api/products/patch/" + item.product_id
                fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data));
				if(imgChanged){
                    if(!stockImg){
    					fetch("http://localhost:3001/api/cloudinary/upload-product/"+localStorage.getItem('curr_user_id'), { method: "POST", body: curImage})
    					.then(res => res.json())
    					.then(data => {
    						item["photo"] = data.result
    						const imgurl = "http://localhost:3001/api/products/patchimg/" + item.product_id
    	  					fetch(imgurl, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data))
    						setModalState(false);
    						window.location.reload(false)
    	  					navigate('/farmer');
    	  				})	
                    }
                    else{
                        item["photo"] = curObj[item["product_type"]]
                        const imgurl = "http://localhost:3001/api/products/patchimg/" + item.product_id
                        fetch(imgurl, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item) }).then(data => console.log(data))
                        setModalState(false);
                        window.location.reload(false)
                        navigate('/farmer');
                    }	
				}
				else{
                	setModalState(false);
                	window.location.reload(false)
                	navigate('/farmer');
				}
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
                    {uploadImage && 
                    (<img alt="sampleImg}" src={uploadImage} id="imageUpload"/>)}
                    {uploadImage &&
                    (<Button data-testid = "upload" color="secondary" sx={{ p: '5', width: '100%', height: '100%'}} variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" encType='multipart/form-data' onChange={handleImageUpload}/>
                    </Button>)}
                    <FormControlLabel onChange={defaultImageCheck} sx={{ left: "50%" }} control={<Switch /*defaultChecked*/ />} labelPlacement="bottom" label="Use Default Image" />
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
