
const _express = require('express') 
const helmet = require('helmet')
const compression = require('compression')
// const busboyParser = require('busboy-body-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')

module.exports = (express) => {

    // Registering JSON & URLEncoded Parsers
    express.use(bodyParser.json())
    express.use(bodyParser.urlencoded({ extended: true, limit: config('http.express.post.limit', '2mb') }))

    // trust first proxy
    if (config('http.express.trustProxy', true))
        express.set('trust proxy', 1) 
        
    // Multipart Parser (busboy-body-parser)
    // express.use(busboyParser(config('http.express.uploads', {})))
    
    // Static Files
    express.use(_express.static('public'))

    // View Engine
    express.set('view engine', 'pug')
    // express.engine('html', require('hbs').__express)
    express.set('views', use('app').appPath('Views'))

    // Always wear a helmet
    express.use(helmet(config('http.express.helmet', { })))

    // Session
    SessionSetup(express)

    // Gzip compression
    if (config('http.express.gzip', true))
        express.use(compression())

}


function SessionSetup (express) {

    express.use(expressSession({
        secret: env('APP_KEY'),
        resave: false,
        saveUninitialized: false,
        unset: 'destroy',
        cookie: {
            httpOnly: true,
            sameSite: true,
            secure: false
        },
        proxy: true,
    }))

}