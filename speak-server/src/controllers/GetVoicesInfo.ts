/**
 *      Device controller
 */

'use strict'

import {VoicesConfiguration} from '../configurations/VoicesConfigurationLoader'
let config:any = VoicesConfiguration

export class GetVoicesInfo {
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
