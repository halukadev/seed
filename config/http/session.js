'use strict'

var env = use('Env')

module.exports = {

	/*
	|--------------------------------------------------------------------------
	| Session Store
	|--------------------------------------------------------------------------
	|
	| Specifies which session store to use.
	|
	*/
	store: env.get('SESSION_STORE', 'memory'),


	/*
	|--------------------------------------------------------------------------
	| Express-Session Configs
	|--------------------------------------------------------------------------
	|
	| Configs available for `express-session`. Visit `express-session` to see
	| more config options.
	|
	| https://npmjs.com/package/express-session
	|
	*/
	saveUninitialized: false,
	resave: false,
	unset: 'destroy',
	cookie: {
		httpOnly: true,
		sameSite: true,
		secure: false
	},


	/*
	|--------------------------------------------------------------------------
	| Session Stores
	|--------------------------------------------------------------------------
	|
	| Configs for the available session stores.
	|
	*/
	stores: {

		// Memory Store
		memory: {
			// Adapter to build memory store
			adapter: 'memorystore',
		},

		// File Based Session Store
		file: {
			// Adapter to build file store
			adapter: 'file',

			// Configs to be sent to adapter function
			path: app().storagePath('session'),
			reapAsync: true,
			reapSyncFallback: true
		},


	},


	/*
	|--------------------------------------------------------------------------
	| Session Store Adapters
	|--------------------------------------------------------------------------
	|
	| Adapters are functions that set up the session for a store. Every session
	| store must implement an adapter to build up their stores. Any config passed
	| from stores can be accessed in `config` object.
	*/

	adapters: {

		memorystore: /* istanbul ignore next */ 
		function (expressSession, config) {
			return expressSession
		},

		file: /* istanbul ignore next */ 
		function (expressSession, config) {

			var FileStore = require('session-file-store')(expressSession);
			var store = new FileStore(config)
			store.close = function () {
				clearInterval(store.options.reapIntervalObject)
			}
			return store

		}

	}

}
