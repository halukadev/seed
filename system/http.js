'use strict'

const { Router } = require('@haluka/routing')


/**
 * Create a Router
 */
const r = new Router({
    path: app().routesPath()
})

app().save({
    name: 'Haluka/Routing/Router',
    alias: 'Router'
}, r)


/**
 * Include routes file to add routes into the application
 */
r.group({}, 'web')

/**
 * Setup Router Dispatcher
 */
const ExpressDispatcher = require('./express').default
const express = new ExpressDispatcher(r, {
    path: app().controllersPath(),
}).createAndDispatch()

use('Events').fire('Http.RouterDispatched')

let port = env('PORT') || 3000
express.listen({ port })
use('Events').fire('Http.StartedListening', express, port)