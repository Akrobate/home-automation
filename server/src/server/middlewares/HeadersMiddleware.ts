import {Request, Response} from 'express';

/**
 *
 *
 * @export
 * @class HeadersMiddleware
 */
export class HeadersMiddleware {
    /**
     *
     *
     * @readonly
     * @static
     * @type {Function}
     * @memberOf HeadersMiddleware
     */
    public static get ACCESS_CONTROL_ALLOW_ORIGIN(): Function {
        return function(request: Request, response: Response, next: Function): any {
            if (request.headers) {
                response.header('Access-Control-Allow-Origin', '*');
            }
            return next();
        };
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {Function}
     * @memberOf HeadersMiddleware
     */
    public static get ACCESS_CONTROL_ALLOW_HEADERS(): Function {
        return function(request: Request, response: Response, next: Function): any {
            if (request.headers) {
                response.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization,X-TOKEN,X-DIGEST,X-DATE,X-PROVIDER');
            }
            return next();
        };
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {Function}
     * @memberOf HeadersMiddleware
     */
    public static get ACCESS_CONTROL_ALLOW_METHODS(): Function {
        return function(request: Request, response: Response, next: Function): any {
            if (request.headers) {
                response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            }
            return next();
        };
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {Function}
     * @memberOf HeadersMiddleware
     */
    public static get ACCESS_CONTROL_ALLOW_CREDENTIALS(): Function {
        return function(request: Request, response: Response, next: Function): any {
            if (request.headers) {
                response.header('Access-Control-Allow-Credentials', 'false');
            }
            return next();
        };
    }
}
