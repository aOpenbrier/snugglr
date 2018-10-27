const path = require('path')
let matches = require('../data/matches.js')

module.exports = function (app) {
    app.post('/matches', (req, res) => {
        matches.addUser(req.body)
        res.sendStatus(200)
        })

    app.get('/matches', (req, res) => {
        res.json(matches.compareUser())
    })
}