'use strict'
let Route = exports.Route = use('Router')

/**
 * @name WebRoutes
 * @desc Houses the routes for the application
 */

Route.get('/', 'Home.index')

Route.get('/home', function ({ Response }) {

    Response.end("Hello, World!")

})