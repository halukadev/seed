'use strict'

/**
 * Haluka - Web Crafting with Confidence
 *
 * @package  Haluka
 * @author   Robin Panta <hacktivistic@gmail.com>
 */

const Blaze = require('./system/app')
const HttpDispatcher = require('./system/http').default

process.env.ENV_PATH = '.env'

// Ignite the App
Blaze.Ignite('./', async function (haluka) {

    // Database
    if (config('database'))
        await haluka.use('Database').setupAll()

    // Create HTTP Dispatcher
    let r = haluka.use('Router')
    const dispatcher = new HttpDispatcher(r, { path: haluka.controllersPath() })
    let http = dispatcher.create()
    
    // Authentication Middleware
    if (env('AUTH'))
        require('./system/auth').default(haluka, http)
        
    // TODO: Middlewares

    // Load Routes
    r.group({}, 'web')

    // Dispatch HTTP Routes
    dispatcher.dispatch(http, config('http.express.timeout'))


    // Start listening
    let port = env('PORT') || 3000
    http.listen({ port }, () => {
        app('Events').fire('Http.StartedListening', http, port)
    })

})
