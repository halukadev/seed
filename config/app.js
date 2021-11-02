'use strict'
let env = app('Env')

module.exports = {

	/*
	|--------------------------------------------------------------------------
	| Name of Application
	|--------------------------------------------------------------------------
	|
	| This is the name of the application. This value is used when
	| application's name is required.
	|
	*/
	name: env.get('APP_NAME', 'Haluka Lite'),


	/*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" on which application is currently
	| running in. Set this in your ".env" file.
	|
	*/
	env: env.get('APP_ENV', 'production'),

	/*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
	| This value determines the "URL" of the application for generating links.
	| This should be set at the root of the application.
	|
	*/
	url: env.get('APP_URL', 'http://localhost'),

	/*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
    */
   debug: env.get('APP_DEBUG', false),

   /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is used by the encrypter service and should be set
    | to a random, 32 character string, otherwise these encrypted strings
    | will not be safe. Please do this before deploying an application!
    |
    */
   key: env.get('APP_KEY'),

   cipher: 'aes-256-cbc',

}
