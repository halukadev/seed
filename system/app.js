'use strict'

const fs = require('fs')
const chalk = require('chalk')
const Youch = require('youch')
const forTerminal = require('youch-terminal')
const requireAll = require('require-all')
const Haluka = require('@haluka/core').Application
const { Router } = require('@haluka/routing')

exports.Ignite = async function (appPath, callback) {

    // House-Keeping
    console.clear()
    console.log(chalk.green('Preparing to boot Haluka'))

    // Booting
    try {
        
        let haluka = Haluka.getInstance(appPath)
        
        require('./events.js')
        // Loads all the event handlers from applciation
        eventLoader(haluka.eventsPath())

        let appData = loadAppData(haluka)
        haluka.boot(appData)

        setupRouter(haluka)

        if (typeof(callback) === 'function')
            await callback(haluka)

        console.log()
        console.log(chalk.magenta('Your Haluka App booted successfully.'))
        console.log(chalk.blue('Thank you for choosing Haluka for your application.'))
        console.log()
        console.log(chalk.bold.green(`Your app is now available at ${chalk.blue.underline(config('app.url', 'http://localhost') + ':' + env('PORT', 3000))}`))
        
    } catch (error) {
        new Youch(error, {})
            .toJSON()
            .then((output) => {
                console.log(forTerminal(output))
                process.exit(1)
            })
    }

}

const eventLoader = (path) => {
    if (fs.existsSync(path)) {
        requireAll({
            dirname: path,
            filter: /(.*)\.(js|ts)$/,
            excludeDirs: /^\.(git|svn)$/
        })
    }else {
        console.log(chalk.bold.yellow('Warning: Events folder not found in App directory. Ignoring event loading.'))
    }
}

const loadAppData = (haluka) => {    
    if (!fs.existsSync(haluka.appPath('App.js'))) {
        console.log(chalk.bold.red('Error: App Data file (App.json) not found in App directory.'))
        process.exit(1)
    }

    return require(haluka.appPath('App'))
    
}

const setupRouter = (haluka) => {
    haluka.register('Route', (_app, opts) => new Router(opts))

    const r = haluka.use('Route', { path: haluka.routesPath() })
    haluka.save({
        name: 'Haluka/Routing/Router',
        alias: 'Router'
    }, r)

    return r
}