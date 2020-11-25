import mysql=  require ('mysql');

export default class MYSQL{

    private static _instance: MYSQL;

    cnn: mysql.Connection;
    conectado: boolean =false;
    
    private constructor(){
        console.log('Clase inicializada')
        this.cnn=mysql.createConnection({
            host     : 'localhost',
            user     : 'codesa',
            password : '123456',
            database : 'usuario'
          });
          this.connectarDB();
          
           } 
           public static get instance() {
               return this._instance || ( this._instance = new this()) ;
           }
           static ejecutarQuery (query:string, callback:Function){

            this.instance.cnn.query(query, (err, results:Object[], fields)=>{

                if(err){
                    console.log('error');
                    console.log(err);
                    return callback(err);
                }

                if(results.length===0){
                    callback('el registro solicitado no existe')
                } else {
                    callback(null, results);
                }
                
            });
           }
           
           
           
           
           
           //this.cnn.connect();

          private connectarDB () {

            this.cnn.connect( ( err: mysql.MysqlError) => {

                if(err){
                    console.log(err.message);
                    return;
                }
                this.conectado =true;
                console.log('base ')
            })
          }
    }

