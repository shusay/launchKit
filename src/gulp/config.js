'use strict';

/*------------------------------------------------------------------------------
 * 2. FILE DESTINATIONS (RELATIVE TO ASSSETS FOLDER)
------------------------------------------------------------------------------*/
// opt
// @param Choose css framework between foundatino and bootstrap
// @param boolem automatic _s install at the init task
// @param false or virtual host name of local machine such as . Set false to browser-sync start as server mode.
// @param false or Subdomains which must be between 4 and 20 alphanumeric characters.
// @param browser which browserSync open
module.exports = {
  'opt': {
    'cssBase'      : false,
    '_s'           : false,
    'proxy'        : '192.168.33.10',
    'tunnel'       : false,
    'browser'      : 'google chrome'
  },
  // basic locations
  'paths': {
    'root'         : './',
    'srcBower'     : 'bower_components/',
    'srcDir'       : 'src/',
    'srcImg'       : 'src/images/',
    'srcPug'      : 'src/pug/',
    'srcSlim'      : 'src/slim/',
    'srcJs'        : 'src/js/',
    'srcJson'      : './src/json/',
    'srcScss'      : 'src/scss/',
    'destDir'      : './assets/',
    'destImg'      : './assets/images/',
    'destCss'      : './assets/css/',
    'destJs'       : './assets/js/',
    'htmlDir'      : './',
    'reloadOnly'   : ['**/*.php']
  },
  'nodeSassConf': {
    'includePaths'   : []
  }
}
