/**
 *      Device controller
 */

'use strict'

import {DevicesConfiguration} from '../configurations/DevicesConfigurationLoader'
let config:any = DevicesConfiguration

export class GetCameraInfo {
    public process(params: any): Promise<any> {
        return new Promise((resolve: any, reject: any)=>{
            if (Object.keys(params.query).length === 0) {
                return resolve(config)
            } else {
                return reject({name: 'ValidationError', details: "No parameters required"})
            }
        })
    }
}
