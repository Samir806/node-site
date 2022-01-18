const Route = require('express').Router
const Todo = require('../model/todo')


const router = new Route()

router.get('/', async (req,res)=>{
    const connect = await Todo.find({})
    res.render('index',{
        title: "Todos list",
        isTodo:true,
        connect
    })
})

router.get('/create', (req,res)=>{
    res.render('create',{
        title: "Create list",
        isIndex:true
    })
})

router.post('/create', async (req, res)=>{
    const todo = new Todo({
        title: req.body.title,
    })
    await todo.save()
    res.redirect('/')
})

module.exports = router