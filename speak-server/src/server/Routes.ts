import {Router} from 'express';
import {Route} from './Route';

/**
 *
 *
 * @export
 * @class Routes
 */
export class Routes {
    /**
     *
     *
     * @private
     * @type {string}
     * @memberOf Routes
     */
    private base_url: string = null;
    /**
     *
     *
     * @private
     * @type {Router}
     * @memberOf Routes
     */
    private router: Router = null;

    /**
     *
     * @param {RouteCollectionInterface} config
     */
    constructor(config: any) {
        this.base_url = config.base_url;
        this.router = Router();

        config.routes.forEach((route: Route) => {
            if (route.getMiddleware() === null) {
                if (route.getVerb() === Route.VERB_GET) {
                    this.router.get(route.getUrl(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_POST) {
                    this.router.post(route.getUrl(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_PUT) {
                    this.router.put(route.getUrl(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_DELETE) {
                    this.router.delete(route.getUrl(), route.getAction());
                }
            } else {
                if (route.getVerb() === Route.VERB_GET) {
                    this.router.get(route.getUrl(), route.getMiddleware(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_POST) {
                    this.router.post(route.getUrl(), route.getMiddleware(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_PUT) {
                    this.router.put(route.getUrl(), route.getMiddleware(), route.getAction());
                }
                if (route.getVerb() === Route.VERB_DELETE) {
                    this.router.delete(route.getUrl(), route.getMiddleware(), route.getAction());
                }
            }
        });
    }

    /**
     *
     *
     * @returns {string}
     *
     * @memberOf Routes
     */
    public getBaseUrl(): string {
        return this.base_url;
    }

    /**
     *
     *
     * @returns {Router}
     *
     * @memberOf Routes
     */
    public getRouter(): Router {
        return this.router;
    }
}
