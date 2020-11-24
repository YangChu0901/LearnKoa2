const mysql = require('mysql')
const DBconfig = require('../config/DBconfig')

let pool = mysql.createPool(DBconfig)

let SqlAction = (sql,value) => {
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if(err){
                console.log(err)
                reject(err)
            }else{
                console.log('Connect to DB Success')
                connection.query(sql,value,(err,result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                    connection.release();
                })
            }
        })
    })
}

module.exports = {
    SqlAction
}