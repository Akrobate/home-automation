/**
 *      Device controller
 */

'use strict'

const exec = require('child_process').exec
const Joi = require('joi');
const debug = true

export class GetCameraSnapshot {

    public constructor() {
        // console.log('contructed Users2ReadId')
    }

    public process(params: any): Promise<any> {

        // console.log(params.query)
        return new Promise((resolve: any, reject: any)=>{

            let p = params.query;

            const schema = Joi.object().keys({
                camera: Joi.string().min(0).max(100).required(),
            })

            const result = Joi.validate(p, schema);
            if (result.error !== null) {
                return reject(result.error)
            }

            // let cmd = 'sudo ./send 0 52423867 1 on'
            let cmd = 'sudo ./send ' + p.group + ' ' + p.identity + ' ' + p.id + ' '

            if (debug) {
                console.log(cmd)
                return resolve({controller: 'GetDevicesControll', message: cmd })
            } else {
                exec(cmd, function(error, stdout, stderr) {
                    console.log("done...")
                    console.log("error")
                    console.log(error)
                    console.log("stdout")
                    console.log(stdout)
                    console.log("stderr")
                    console.log(stderr)
                    return resolve({controller: 'GetDevicesControll'})
                })
            }
        })
    }
}
