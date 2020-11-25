import {Router,Request,Response } from 'express'
import MySQL from '../mysql/mysql'


const router = Router();

router.get('/rol',(req: Request, res: Response)=>{

    const query =`
    SELECT *
    FROM rol`;
    
    MySQL.ejecutarQuery(query,(err:any, rol: Object[])=>{

        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }
            else{
                res.json({
                    ok:true,
                    rol:rol
                })
            }
        
    })
  
});
router.get('/rol/:id',(req: Request, res: Response)=>{
    const id =req.params.id
    const escapeId = MySQL.instance.cnn.escape( id);
    const query =`
    SELECT *
    FROM rol
    where ID_ROL = ${escapeId}`;
   
    
    MySQL.ejecutarQuery(query,(err:any, roles: Object[])=>{

        if(err){
            res.status(400).json({
                ok:false,
                error:err
            });
        }
            else{
                res.json({
                    ok:true,
                    roles:roles,
                    
                })
            }
        
    })
  
});

export default router;