var express= require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var createError = require('http-errors')

var port = 3000

var indexRouter = require('./routes/index')

var app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


//use static files
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/public')))


//use router
app.use('/', indexRouter)


//catch 404 and forward to error handler
app.use((req,res,next)=>{
  next(createError(404))
})
//error handler
app.use((err, req,res,next)=>{
  // only error in deployment
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err: {}

  //render error page
  res.status(err.staus || 500)
  res.render('error')

})



app.listen(port, ()=>{
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app
