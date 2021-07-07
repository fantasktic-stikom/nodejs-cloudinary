class UploadController {
    constructor(){}

    async index(req, res) {
        res.send('upload')
    }
}

module.exports = new UploadController()