import {urlencoded, json} from 'body-parser';

/**
 *
 *
 * @export
 * @class BodyParserMiddleware
 */
export class BodyParserMiddleware {
    /**
     *
     *
     * @readonly
     * @static
     * @type {*}
     * @memberOf BodyParserMiddleware
     */
    public static get URL_ENCODED(): any {
        return urlencoded({extended: true});
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {*}
     * @memberOf BodyParserMiddleware
     */
    public static get JSON(): any {
        return json();
    }
}
