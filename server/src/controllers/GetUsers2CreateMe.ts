
export class GetUsers2CreateMe {

    public constructor() {
        // console.log('contructed GetUsers2CreateMe')
    }

    public process(params: any): Promise<any> {
        return new Promise((resolve: any, reject: any)=>{
            console.log(params)
            let e = false
            if (e) {
                reject()
            }
            resolve({controller:'contructed GetUsers2CreateMe'})
        })
    }
}
