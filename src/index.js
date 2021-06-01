const express = require( 'express' )
/*****/
require( './database/mongoose')
const userRouter = require( './routers/user' )
const taskRouter = require( './routers/task' )
/*****/
const app = express()
const port = 3000
/*****/
app.use( express.json() )//For parsing application/JSON
app.use( userRouter )
app.use( taskRouter )
/******/
app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    /*const task = await Task.findById('60b54c907d29e00d1cb801dd')
    await task.populate( 'owner' ).execPopulate()
    console.log( task.owner )*/
    const user = await User.findById('60b54b1444c15a2594b8aaae')
    await user.populate('tasks').execPopulate()
    console.log( user.tasks )
}

main()