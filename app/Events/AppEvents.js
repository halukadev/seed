'use strict'

// Event Service
let Event = use('Events')

// Core Providers Resolved
Event.on('CoreProviders.Resolved', /* istanbul ignore next */ function (event, app) {
	console.log('YOLO')
})

// App Providers Resolved
Event.on('AppProviders.Resolved', /* istanbul ignore next */ function (event, app) {

	console.log('Application about to be Booted!')
	
})

// On Successful Server Bootstrapping
Event.on('Http.StartedListening', /* istanbul ignore next */ (event, express, port) => {
	console.log('Server has started listing on port ' + port)
})


// On Request Received and Route Found
Event.on('Server.RequestReceived', /* istanbul ignore next */ function (event, req) {
	use('Log').log('info', `${req.method} ${req.url}`)
})