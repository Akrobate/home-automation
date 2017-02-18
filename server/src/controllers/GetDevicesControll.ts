/**
 *      Device controller
 */

var exec = require('exec');

export class GetDevicesControll {

    public constructor() {
        // console.log('contructed Users2ReadId')
    }

    public process(params: any): Promise<any> {
        return new Promise((resolve: any, reject: any)=>{
            console.log(params)
            let e = false
            if (e) {
                reject()
            }

            let cmd = 'sh ./ir_lights_commander.sh '
            cmd = 'sudo ./send 0 52423867 1 on'

            exec(cmd, function() {
                console.log("done...")
                resolve(
                    {controller:'contructed Users2ReadId'}
                )
            })

        })
    }
}
