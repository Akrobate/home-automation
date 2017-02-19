/**
 *      Device controller
 */


var exec = require('child_process').exec
const Joi = require('joi');

export class GetDevicesControll {

    public constructor() {
        // console.log('contructed Users2ReadId')
    }

    public process(params: any): Promise<any> {

        console.log(params.query)

        const schema = Joi.object().keys({
            group: Joi.number().min(0).max(100).required(),
            identity: Joi.number().min(0).max(67108863).required(),
            id: Joi.number().min(0).max(100).required(),
            command: Joi.boolean().required()
        })

        const result = Joi.validate(params.query, schema);
        if (result.error !== null) {
            return new Promise((resolve: any, reject: any) => {
                console.log(result)
                reject({controller:'Problem'})
                if (0) {
                    resolve()
                }
            })
        } else {
            return new Promise((resolve: any, reject: any)=>{
                //console.log(params)
                let e = false
                if (e) {
                    reject()
                }

                let cmd = 'sh ./ir_lights_commander.sh '
                cmd = 'sudo ./send 0 52423867 1 on'

                let debug = true
                if (debug) {
                    console.log(cmd)
                    resolve({controller:'contructed GetDevicesControll', message: cmd })
                } else {
                    exec(cmd, function(error, stdout, stderr) {
                        console.log("done...")
                        console.log("error")
                        console.log(error)
                        console.log("stdout")
                        console.log(stdout)
                        console.log("stderr")
                        console.log(stderr)
                        resolve(
                            {controller:'contructed Users2ReadId'}
                        )
                    })
                }
            })
        }
    }
}
