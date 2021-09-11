const db = require('../config/db');

class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1; //Js에서는 0 index이므로
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;
        //console.log(createdAtDate)
        let sql = `
            INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.body}',
            '${createdAtDate}'
        )
        `;
        
        // const [newPost, _ ] = await db.execute(sql);
        // execute()는 packData와 FieldPacket을 배열로 리턴하는데, 뒤에 것은 필요 없으므로
        
        return db.execute(sql);
    }

    static findAll(){
        let sql = "SELECT * FROM posts;";

        return db.execute(sql);
    }
    static findById(id){
        let sql = `SELECT * FROM posts WHERE id = ${id};`
        return db.execute(sql)
    }
}

module.exports = Post;