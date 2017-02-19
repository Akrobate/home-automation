var fs = require('fs')
var path = require('path')

export class ClassAutoload {

    private class_directory_path: string

    private classes_collection: any

    constructor() {
        this.classes_collection = {}
    }

    public setClassDirectoryPath(path: string) {
        this.class_directory_path = path
    }

    public checkClassExistsFs(class_name: string): boolean {
        let filepath = path.resolve(process.cwd(), 'src/' + this.class_directory_path + '/' + class_name + '.ts');
        console.log(filepath)
        let result = false
        if (fs.existsSync(filepath)) {
            result = true
        }
        return result
    }

    public checkClassExistsMemory(class_name: string): boolean {
        let result = false
        if (this.classes_collection[class_name] !== undefined) {
            result = true
        }
        return result
    }

    public loadClass(class_name: string) {
        let path_require = '../' + this.class_directory_path + '/' + class_name
        var loaded_class_imp = require(path_require)
        let loaded_class = loaded_class_imp[class_name]
        // let t = new type()
        // t.process({'test':'test'})
        this.classes_collection[class_name] = loaded_class
    }

    public getClass(class_name: string): any {
        if (this.checkClassExistsMemory(class_name)) {
            return this.classes_collection[class_name]
        } else if (this.checkClassExistsFs(class_name)) {
            this.loadClass(class_name)
            return this.classes_collection[class_name]
        }
        return undefined
    }
}
