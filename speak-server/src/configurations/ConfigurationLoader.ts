declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const configuration_filename = 'configuration.yaml'
let used_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

export let Configuration: Object = {
    application_port: used_configuration.application_port,
    raml_specification_file: used_configuration.raml_specification_file,
}
