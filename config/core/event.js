'use strict'

module.exports = {

	/*
	|--------------------------------------------------------------------------
	| Wildcard
	|--------------------------------------------------------------------------
	|
	| Whether the application fires and listens to Wildcard events or not.
	| Default is false.
	*/
	wildcard: true,


	/*
	|--------------------------------------------------------------------------
	| Delimiter
	|--------------------------------------------------------------------------
	|
	| The delimiter used to segment event namespaces, Default is `.`.
	|
	*/
	delimiter: '.',


	/*
	|--------------------------------------------------------------------------
	| New Listener
	|--------------------------------------------------------------------------
	|
	| Set this to `true` if you want to emit the newListener event.
 	| The default value is `true`.
	|
	*/
	newListener: true,


	/*
	|--------------------------------------------------------------------------
	| Max Listeners
	|--------------------------------------------------------------------------
	|
	| The maximum amount of listeners that can be assigned to an event.
	| The Default is 10.
	|
	*/
	maxListeners: 10,


	/*
	|--------------------------------------------------------------------------
	| Verbose Memory Leak
	|--------------------------------------------------------------------------
	|
	| Show event name in memory leak message when more than maximum amount of
	| listeners is assigned, default is false.
	|
	*/
	verboseMemoryLeak: true

}
