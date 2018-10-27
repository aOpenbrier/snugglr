const path = require('path')

module.exports = function (app){
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))  //get beginning of directory path
        // __dirname is beginning of directory name, before file. `path.join` concats
    })
}
