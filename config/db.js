require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
})
// let sql = "SELECT * FROM posts;"

// pool.execute(sql, function(err, result){
//     if (err) throw err;
//     // console.log(result);
//     result.forEach((res)=>{
//         console.log(res.title)
//     })

// });


module.exports = pool.promise();

//연결여부를 이 파일 단독으로 체크하여 mysql연결 여부를 먼저 console.log에 확인한다
// > node config/db.js