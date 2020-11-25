import Server from './server/server';
import router from './router/router'
import MYSQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);
//const mysql = new  MYSQL();
MYSQL.instance;

server.start( ()=> {
    console.log('servidor corriendo');
})