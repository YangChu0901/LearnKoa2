const SqlAction = require('../lib/mysql')

module.exports ={
    getList: async () => {
        let sql = `SELECT * FROM book`
        return SqlAction.SqlAction(sql)
    },
    getID: async (id) => {
        let sql = `SELECT * FROM book WHERE id = ${id}`
        return SqlAction.SqlAction(sql)
    },
    CreateBook: async (title,author) => {
        let sql = `INSERT INTO book (title,author) VALUES ('${title}','${author}')`
        return SqlAction.SqlAction(sql)
    },
    updateBook: async (id,data) => {
        let {title} = data
        let {author} = data
        let sql = `UPDATE book SET title = '${title}' , author = '${author}' WHERE id = '${id}'`
        return SqlAction.SqlAction(sql)
    },
    deleteBook: async(id) => {
        let sql = `DELETE FROM book WHERE id = '${id}'`
        return SqlAction.SqlAction(sql)
    }
}