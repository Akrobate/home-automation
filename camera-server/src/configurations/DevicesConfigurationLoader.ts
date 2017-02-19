declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const configuration_filename = 'devices.configuration.yaml'
let used_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

export let DevicesConfiguration: Object = used_configuration.devices
