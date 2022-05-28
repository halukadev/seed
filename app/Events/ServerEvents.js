'use strict'

const chalk = require('chalk')
const Youch = require('youch')
const fs = require('fs')

// Event Service
const Handler = use('Events')

// On Request Received and Route Found
Handler.on('Http.RequestReceived', function (event, req) {
	if (config('core.app.debug')) 
		console.log(`${chalk.bold.yellowBright(req.method)} ${chalk.magentaBright(req.url)}`)
})

// On Response Served
Handler.on('Http.ResponseServed', function (event, req, res) {
	if (config('core.app.debug')) 
		console.log(`Responded with Status Code: ${res.statusCode != 200 ? `${chalk.bold.redBright(res.statusCode)}` :  `${chalk.bold.greenBright(res.statusCode)}`}`)
})

// On HTTP Error
Handler.on('Http.Error.*', async function (event, err, req, res) {
	if (config('core.app.env') === 'production') {
		let code = (err.status == 404) ? 404 : 500
		if (req.is('application/json'))
			req.status(code).json({ status: "error", code: code, message: err.message })
		else
			res.send(Errors[code])
	} else {
		if (req.is('application/json')) {
			res.send(await new Youch(err, req).toJSON())
		}
		else {
			res.send(await new Youch(err, req).toHTML())
		}
		console.log(`Error Code: ${chalk.bold.redBright(res.statusCode)}`)
	}
})


const Errors = {
	404: fs.readFileSync(app().storagePath('404.html')).toString(),
	500: fs.readFileSync(app().storagePath('500.html')).toString()
}