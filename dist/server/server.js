"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
    publicfolder() {
        const publicPath = path.resolve(__dirname, '../public');
    }
}
exports.default = Server;
exports.default = Server;
