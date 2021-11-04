/**
 * Haluka CLI RC
 */

require('./system/app')

require('@haluka/axe').commands.forEach (x => exports[x[0]] = x[1])