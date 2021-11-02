/**
 * Event Loader
 *
 * Loads all the event files from app/Events directory
 *
 */
 'use script'

 require('require-all')({
     dirname: app().appPath('Events'),
     filter: /(.*)\.js$/,
     excludeDirs: /^\.(git|svn)$/
 })


 // WIP : List of Available Events

 /**
  * CoreProviders.Resolved
  * AppProviders.Resolved
  * Console.Executed
  */