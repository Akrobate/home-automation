
export class GetUsers2ReadId {

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
            resolve({controller:'contructed Users2ReadId'})
        })
    }
}
