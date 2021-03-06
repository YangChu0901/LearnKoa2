const Koa = require('koa')
const middleware = require('./middleware')
const router = require('./router')

const app = new Koa()

middleware(app)
router(app)

app.listen(3030, ()=>{
  console.log('server is running at http://localhost:3030')
})
