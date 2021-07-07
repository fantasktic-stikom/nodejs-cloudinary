const cloudinary = require('../plugin/cloudinary')

class ImageController {
    constructor(){}

    // UPLOAD IMAGE
    async uploadImage(req, res) {
        try {
            
            // VALIDATION
            if(!req.file){
                return res.status(402).json({
                    'success': false,
                    'message': 'Please select an image'
                });
            }
            // UPLOADING
            const upload = await cloudinary.v2.uploader.upload(req.file.path)
            
            if (!upload) {
                return res.status(400).json({
                    'success': false,
                    'message': 'Error uploading image'
                });
            } else {
                return res.status(200).json({
                    'success': true,
                    'message': 'Success uploading image',
                    'data' : {
                        'image_url': upload.secure_url,
                        'image_id': upload.public_id
                    }
                });
            }
      

        } catch (error) {
            return res.status(400).json({
                'success': false,
                'message': error.message
            });
        }
    }

    // GET IMAGE
    async getImage(req, res) {
        try {
            const publicId = req.params.publicId
            
            cloudinary.v2.api.resource(publicId, function(error, result) {
                if(error) {
                    return res.status(400).json({
                        'success': false,
                        'message': 'Error getting image'
                    });
                }

                return res.json({
                    'success': true,
                    'message': 'Success getting image',
                    'data': result
                });
            });

        } catch (error) {
            return res.status(400).json({
                'success': false,
                'message': error.message
            });
        }
    }
}

module.exports = new ImageController()