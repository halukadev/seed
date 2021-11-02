const { Controller } = require("@haluka/routing")

class Home extends Controller{

    index ({res}) {
        res.render('home')
    }

}

exports.default = Home