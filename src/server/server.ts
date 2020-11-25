import express = require('express');
import path = require('path');
 

export default class Server {

    public app: express.Application;
    public port: number;
    constructor(puerto:number){
        this.port= puerto;
        this.app = express();
    }

    static init (puerto:number){
        return new Server (puerto);
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
    private publicfolder(){
        const publicPath = path.resolve(__dirname,'../public')
    }

    

}
exports.default = Server;