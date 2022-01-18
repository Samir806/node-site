const express= require('express')
const mongoose = require('mongoose')
const handlebar = require('express-handlebars')
const router = require('./routes/todos')
const bodyParser = require('body-parser')

const app = express()
const hbs = handlebar.create({
    "defaultLayout": "main",
    "extname": 'hbs'
})
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.engine("hbs", hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
const PORT = process.env.PORT || 3000
const url = 'mongodb+srv://samir:2535560a@cluster0.t3khv.mongodb.net/site'
const start = ()=>{
    try{
     mongoose.connect(url)
     app.listen(PORT, ()=>{console.log('Server is running');})
    }catch(e){
    console.log(e);
}
}
start()