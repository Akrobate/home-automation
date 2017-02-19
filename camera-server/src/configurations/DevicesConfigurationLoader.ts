declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const configuration_filename = 'devices.configuration.yaml'
let used_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

let identities = used_configuration.identities
console.log(identities)
for(let item in used_configuration.devices) {
    let identity_name = used_configuration.devices[item].identity;
    used_configuration.devices[item].identity = identities[identity_name]
}

export let DevicesConfiguration: Object = used_configuration.devices
