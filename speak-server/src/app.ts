// import {Request, Response} from 'express';
let RamlAutoRoute = require('raml-autoroute')
import {Server} from './server/Server';
// import {Routes} from './Routes';
// import {Route} from './Route';
import {HeadersMiddleware} from './server/middlewares/HeadersMiddleware';
import {BodyParserMiddleware} from './server/middlewares/BodyParserMiddleware';
// import {LoggerMiddleware} from './middlewares/LoggerMiddleware';
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

// console.log(JSON.stringify(raml_auto_route.getRoutes(), null, 2))

import {ClassAutoload} from './libs/ClassAutoload'

let autoloader = new ClassAutoload()
autoloader.setClassDirectoryPath('./controllers')
console.log(autoloader.getClass('GetUsers2CreateMe'))

// /v1/users2/create/me

let GetUsers2CreateMe = autoloader.getClass('GetUsers2CreateMe')
let t = new GetUsers2CreateMe()
t.process({'test':'test'})

server.addRoutesFromRamlAutoRoute(raml_auto_route)

// server.addRoutes(new Routes(api_v1_routes_configuration));
server.listen();
