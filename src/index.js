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

const jwt = require( 'jsonwebtoken' )
const myFunction = async () => {
    const token = jwt.sign( { _id : 'abc123' } , 'ThisIsMyNewCourse' , { expiresIn : '7 days' } )
    console.log( token )
    const data = jwt.verify( token , 'ThisIsMyNewCourse' )
    console.log( data )
}
myFunction()
/******/
app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})