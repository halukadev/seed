const { Controller } = require("@haluka/routing")
const Welcome = require("../Model/Welcome").default

class Home extends Controller{

    async index ({ req, Request, res, Response }) {
        res.render('welcome', {
            quote: Welcome.quote()
        })
    }

}

exports.default = Home