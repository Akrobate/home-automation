/**
 *
 *
 * @export
 * @class Route
 */
export class Route {
    /**
     *
     *
     * @private
     * @type {string}
     * @memberOf Route
     */
    private verb: string = null;
    /**
     *
     *
     * @private
     * @type {string}
     * @memberOf Route
     */
    private url: string = null;
    /**
     *
     *
     * @private
     * @type {Function}
     * @memberOf Route
     */
    private action: Function = null;
    /**
     *
     *
     * @private
     * @type {Function}
     * @memberOf Route
     */
    private middleware: Function = null;
    /**
     *
     *
     * @readonly
     * @static
     * @type {string}
     * @memberOf Route
     */
    public static get VERB_GET(): string {
        return 'get';
    }
    /**
     *
     *
     * @readonly
     * @static
     * @type {string}
     * @memberOf Route
     */
    public static get VERB_POST(): string {
        return 'post';
    }
    /**
     *
     *
     * @readonly
     * @static
     * @type {string}
     * @memberOf Route
     */
    public static get VERB_PUT(): string {
        return 'put';
    }
    /**
     *
     *
     * @readonly
     * @static
     * @type {string}
     * @memberOf Route
     */
    public static get VERB_DELETE(): string {
        return 'delete';
    }

    /**
     * Creates an instance of Route.
     *
     * @param {string} [verb=null]
     * @param {string} [url=null]
     * @param {Function} [action=null]
     * @param {Function} [middleware=null]
     *
     * @memberOf Route
     */
    constructor(verb: string, url: string, action: Function) {
        this.verb       = verb;
        this.url        = url;
        this.action     = action;
        this.middleware = null;
    }

    /**
     *
     *
     * @returns {string}
     *
     * @memberOf Route
     */
    public getVerb(): string {
        return this.verb;
    }

    /**
     *
     *
     * @returns {string}
     *
     * @memberOf Route
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     *
     *
     * @returns {*}
     *
     * @memberOf Route
     */
    public getAction(): any {
        return this.action;
    }

    /**
     *
     *
     * @returns {*}
     *
     * @memberOf Route
     */
    public getMiddleware(): any {
        return this.middleware;
    }
}
