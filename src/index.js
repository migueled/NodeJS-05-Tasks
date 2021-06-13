const express = require( 'express' )
/*****/
require( './database/mongoose')
const userRouter = require( './routers/user' )
const taskRouter = require( './routers/task' )
/*****/
const app = express()
const port = 3000
/**MULTER**/
const multer = require( 'multer' )
const upload = multer({
    dest : 'images'
})

app.post( '/upload' , upload.single( 'upload' ) , ( req , res ) => {
    res.send()
})
/*****/
app.use( express.json() )//For parsing application/JSON
app.use( userRouter )
app.use( taskRouter )
/******/
app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})