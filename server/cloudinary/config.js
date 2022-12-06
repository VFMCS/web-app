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

//app.use(express.static(__dirname + '/public'));
//app.use('/uploads', express.static('uploads'));

cloudinary.config({
	cloud_name: "dqjys2mv8",
	api_key: "412412668186564",
	api_secret: "6pveawNVGWcAuGTbFGleS3Zhr5w"
});

async function uploadToCloudinary(locaFilePath, cloudinaryFilePath, fileName) {
	var mainFolderName = "main"
	//var filePathOnCloudinary = mainFolderName + "/farmer/" + locaFilePath
	var filePathOnCloudinary = mainFolderName + "/" + cloudinaryFilePath + "/" + fileName

	return cloudinary.uploader.upload(locaFilePath,{"public_id":filePathOnCloudinary})
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

app.post('/upload-product', upload.single('product'), async (req, res, next) => {
	var locaFilePath = req.file.path
	var filePathOnCloudinary = "products" //need to get current farmer id
	var fileName = req.file.filename
	var result = await uploadToCloudinary(locaFilePath, filePathOnCloudinary, fileName)
	return res.status(200).json({result: result.url})
})
/*
app.post('/upload-farmer', upload.single('profile-img'), async(req, res, next) => {
	var localFilePath = req.file.path
	var filePathOnCloudinary = "/profile-picture/" // need to get current farmer id + "/" 
	var result = await uploadToCloudinary(localFilePath, filePathOnCloudinary)
	return res.send(result.url)
})*/

module.exports = app;
