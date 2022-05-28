/**
 * Event Loader
 *
 * Loads all the event files from app/Events directory
 *
 */
 'use strict'

 const chalk = require('chalk')
 
 // Event Service
 let Event = use('Events')
 
 // Core Providers Resolved
 Event.on('Application.CoreProvidersResolved', /* istanbul ignore next */ function () {
     console.log(chalk.green('Core Service Providers Loaded...'))
 })
 
 // App Providers Resolved
 Event.on('Application.Booted', /* istanbul ignore next */ function () {
     console.log(chalk.green('Application Loaded...'))
 })
 
 // App Providers Resolved
 Event.on('Database.Connected', /* istanbul ignore next */ function (event, conn) {
     console.log(chalk.green(`Database successfully connected for '${conn}'`))
 })
 
 // Server Listening
 Event.on('Http.StartedListening', /* istanbul ignore next */ function (event, http, port) {
     console.log(chalk.green(`Server started listening at port ${port}`))
 })
 
 app().terminating(() => {
     console.log(chalk.red(`Execution ended. Your app is terminating gracefully.`))
 })