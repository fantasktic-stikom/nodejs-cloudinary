const router = require('express').Router()
const ImageController = require('../controllers/image.controller')
const ImageUploader = require("../middleware/multer");

router.post('/upload', ImageUploader.single("image"), ImageController.uploadImage)

module.exports = router