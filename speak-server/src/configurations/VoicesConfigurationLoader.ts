declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const configuration_filename = 'voices.configuration.yaml'
let used_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

let identities = used_configuration.identities
console.log(identities)
for(let item in used_configuration.devices) {
    let identity_name = used_configuration.devices[item].identity;
    used_configuration.devices[item].identity = identities[identity_name]
}

export let VoicesConfiguration: Object = used_configuration.devices
