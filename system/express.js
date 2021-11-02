
const FactoryExpressDispatcher = require('@haluka/express-dispatcher').default
const express = require('express')

class ExpressDispatcher extends FactoryExpressDispatcher {

    create () {
        let app = super.create()
        app.use(express.static('public'))
        app.set('view engine', 'pug')
        app.set('views', use('app').resourcesPath('views'))
        
        return app
    }

    onRequest(req, res) {
        use('Events').fire('Server.RequestReceived', req, res)
    }
}

exports.default = ExpressDispatcher