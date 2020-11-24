const BookService = require('../service/book')

module.exports = {
    getList: async (ctx) => {
        let data = await BookService.getList()
        ctx.response.body = data
    },

    getID: async (ctx) => {
        let id = ctx.params.id

        let data = await BookService.getID(id)
        if(data.length == 0){
            ctx.status = 404
        }else{
            ctx.response.body = data
        }
    },
    postBook: async (ctx) => {
        let { title } = ctx.request.body
        let { author } = ctx.request.body

        if (title && author){
            console.log(title)
            console.log(author)
            let data = await BookService.createBook(title,author)
            ctx.response.body = data
            ctx.status = 201
        }else{
            ctx.status = 404
        }
    },
    putID: async (ctx) => {
        let id = ctx.params.id
        let { title } = ctx.request.body
        let { author } = ctx.request.body

        if(title && author){
            console.log(ctx.request.body)
            let book = await BookService.getID(id)
            if(book){
                let data = await BookService.updateBook(id,ctx.request.body)
                ctx.response.body = data
                ctx.status = 204
            }else{
                ctx.status = 404
            }
        }else{
            ctx.status = 404
        }
    },
    deleteBook: async (ctx) => {
        let id = ctx.params.id
        if(id){
            let book = await BookService.getID(id)
            if(book){
                let data = await BookService.deleteBook(id)
                ctx.response.body = data
                ctx.status = 204
            }else{
                ctx.status = 404
            }
        }else{
            ctx.status = 404
        }
    }
  }