const { Router } = require('express');
const multer  = require('multer');
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');
const fs = require('fs');

const app = Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({
	cloud_name: "dqjys2mv8",
	api_key: "412412668186564",
	api_secret: "6pveawNVGWcAuGTbFGleS3Zhr5w"
});

async function uploadToCloudinary(locaFilePath, cloudinaryFilePath, fileName) {
	var mainFolderName = "main"
	//var filePathOnCloudinary = mainFolderName + "/farmer/" + locaFilePath
	var filePathOnCloudinary = mainFolderName + "/" + cloudinaryFilePath

	return cloudinary.uploader.upload(locaFilePath,{"folder": filePathOnCloudinary, "use_filename":true, "overwrite": false, "unique_filename": true})//{"public_id":filePathOnCloudinary})
	.then((result) => {
    	fs.unlinkSync(locaFilePath)
    
		return {
      		message: "Success",
      		url:result.url
    	};
  	}).catch((error) => {
    	fs.unlinkSync(locaFilePath)
    	return {message: "Fail",};
  	});
}

app.post('/upload-product/:vendor_id', upload.single('product'), async (req, res, next) => {
	var vendor_id = req.params.vendor_id
	var locaFilePath = req.file.path
	var filePathOnCloudinary = vendor_id + "/products" 
	var fileName = req.file.filename
	var result = await uploadToCloudinary(locaFilePath, filePathOnCloudinary, fileName)
	return res.status(200).json({result: result.url})
})

app.post('/upload-farmer/:vendor_id', upload.single('profile-img'), async(req, res, next) => {
	var vendor_id = req.params.vendor_id
	var localFilePath = req.file.path
	var filePathOnCloudinary = vendor_id + "/profile-picture/"
	var fileName = req.file.filename
	var result = await uploadToCloudinary(localFilePath, filePathOnCloudinary, fileName)
	return res.status(200).json({result: result.url})
})

module.exports = app;
