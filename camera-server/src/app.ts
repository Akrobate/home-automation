// import {Request, Response} from 'express';
let RamlAutoRoute = require('raml-autoroute')

import {Server} from './server/Server';
import {HeadersMiddleware} from './server/middlewares/HeadersMiddleware';
import {BodyParserMiddleware} from './server/middlewares/BodyParserMiddleware';
import {ClassAutoload} from './libs/ClassAutoload'
import {Configuration} from './configurations/ConfigurationLoader'

let config:any = Configuration

// starting Application Server
const server = new Server({ port: config.application_port });
server.addMiddleware(HeadersMiddleware.ACCESS_CONTROL_ALLOW_ORIGIN)
server.addMiddleware(HeadersMiddleware.ACCESS_CONTROL_ALLOW_HEADERS)
server.addMiddleware(HeadersMiddleware.ACCESS_CONTROL_ALLOW_METHODS)
server.addMiddleware(HeadersMiddleware.ACCESS_CONTROL_ALLOW_CREDENTIALS)
server.addMiddleware(BodyParserMiddleware.URL_ENCODED)
server.addMiddleware(BodyParserMiddleware.JSON)
// server.addMiddleware(LoggerMiddleware.MORGAN);

let raml_auto_route = new RamlAutoRoute(config.raml_specification_file)

// Debug : print schema if true
let print_schema = false
// Here to get raml parsed
if (print_schema) {
    let ramljson = raml_auto_route.getRamlJsonSchema()
    console.log(JSON.stringify(ramljson, null, 2))
}

let autoloader = new ClassAutoload()
autoloader.setClassDirectoryPath('./controllers')

server.addRoutesFromRamlAutoRoute(raml_auto_route)

//   ____ _____  _  _____ ___ ____   ____  _____ ______     _______ ____
//  / ___|_   _|/ \|_   _|_ _/ ___| / ___|| ____|  _ \ \   / / ____|  _ \
//  \___ \ | | / _ \ | |  | | |     \___ \|  _| | |_) \ \ / /|  _| | |_) |
//   ___) || |/ ___ \| |  | | |___   ___) | |___|  _ < \ V / | |___|  _ <
//  |____/ |_/_/   \_\_| |___\____| |____/|_____|_| \_\ \_/  |_____|_| \_\
//
//
//
server.staticServer(config.service_data_path)

server.listen();
