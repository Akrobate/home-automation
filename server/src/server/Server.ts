'use strict'
import * as express from 'express';
import {Routes} from './Routes';
import {Route} from './Route';
import {Request, Response} from 'express'
import {ClassAutoload} from '../libs/ClassAutoload'
var ucfirst = require('ucfirst')
// import {Logger} from './Logger';
// import * as bodyParser from "body-parser";

/**
 *
 *
 * @export
 * @class Server
 */
export class Server {

    public app: express.Application;
    private flat_routes: any[]

    /**
     *
     *
     * @private
     * @type {ServerConfigurationInterface}
     * @memberOf Server
     */
    private config: any

    // private app: express.Express = null;

    /**
     * Creates an instance of Server.
     *
     * @param {ServerConfigurationInterface} config
     *
     * @memberOf Server
     */
    public constructor(config: any) {
        this.config = config
        this.app = express()
        this.flat_routes = []
    }

    /**
     *
     *
     * @param {*} [middleware=null]
     *
     * @memberOf Server
     */
    public addMiddleware(middleware: any): void {
        if (middleware !== null) {
            this.app.use(middleware)
        }
    }

    /**
     *
     *
     * @param {Routes} [routes=null]
     *
     * @memberOf Server
     */
    public addRoutes(routes: Routes): void {
        if (routes !== null) {
            this.app.use(routes.getBaseUrl(), routes.getRouter())
        }
    }

    /**
     *
     *
     * @param {Routes} [routes=null]
     *
     * @memberOf Server
     */
    public addRoutesFromRamlAutoRoute(raml_auto_route: any): void {

        if (raml_auto_route !== null) {
            let autoloader = new ClassAutoload()
            autoloader.setClassDirectoryPath('./controllers')

            let auto_routes = raml_auto_route.getRoutes()
            let routes_list = []
            for (let route of auto_routes) {
                routes_list.push(new Route(route.verb, route.express_uri, (request: Request, response: Response) => {
                    let params = request
                    // /v1/users2/create/me
                    let ControllerType = autoloader.getClass(ucfirst(route.verb) + route.controller_name)
                    // Check if class implementation exists
                    if (ControllerType === undefined) {
                        let data = {
                            'generic': "response",
                            'verb':route.verb,
                            'url': route.express_uri,
                            'code' : 0,
                            'msg': "Controller not implemented",
                            'controller_name:': route.controller_name
                        }
                        return response.json(data)
                    } else {
                        let controller = new ControllerType()
                        controller.process(params).then((data) => {
                            return response.json(data)
                        }).catch(() => {
                            return response.json({ 'code' : 1, 'msg': "Controller has not process"})
                        })
                    }
                }))
                console.log(route)
            }

            this.addRoutes(new Routes({ base_url: '/', routes: routes_list } ));
        }
    }

    /**
     *
     * @memberOf Server
     */
    public listen(): void {
        this.app.listen(this.config.port, () => {
            // Logger.getInstance().debug('Server running on port ' + this.config.port);
            console.log('Server running on port ' + this.config.port)
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
