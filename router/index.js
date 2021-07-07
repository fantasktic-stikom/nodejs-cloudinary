const router = require('express').Router()
const UploadController = require('../controllers/upload.controller')

router.post('/upload', UploadController.index)

module.exports = router