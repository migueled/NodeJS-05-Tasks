const express = require( 'express' )
/*****/
require( './database/mongoose')
const userRouter = require( './routers/user' )
const taskRouter = require( './routers/task' )
/*****/
const app = express()
const port = 3000
/*****/
/*app.use( ( req , res , next ) => {
    if( req.method === 'GET' ) {
        res.send( 'GET requests are disabled' )
    } else {
        next()
    }
})*/
app.use( ( req , res , next ) => {
    res.status( 503 ).send( 'Maintenance message' )
})
/*
Without middlewar:      new request -> run route handler

With middleware:        new request -> do something -> run route handler
*/
/*****/
app.use( express.json() )//For parsing application/JSON
app.use( userRouter )
app.use( taskRouter )
/******/
app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})