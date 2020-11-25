"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MYSQL {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'codesa',
            password: '123456',
            database: 'usuario'
        });
        this.connectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('error');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('el registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    //this.cnn.connect();
    connectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('base ');
        });
    }
}
exports.default = MYSQL;
