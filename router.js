const Router = require('koa-router')
const BookController = require('./controller/book')
const HomeController = require('./controller/home')

const router = new Router({
  prefix:'/api'
})

module.exports = (app) => {

  //Book API
  router.get('/books',BookController.getList)
  router.get('/book/:id',BookController.getID)
  router.post('/book',BookController.postBook)
  router.put('/book/:id',BookController.putID)
  router.delete('/book/:id',BookController.deleteBook)

  //Home API
  router.get( '/', HomeController.index )
  router.get('/home', HomeController.home)
  router.get('/home/:id/:name', HomeController.homeParams)
  
  //User API
  router.get('/user', HomeController.login)
  router.post('/user/register', HomeController.register)
  
  app.use(router.routes())
     .use(router.allowedMethods())
}