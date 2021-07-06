const express = require( 'express' )
/*****/
require( './database/mongoose')
const userRouter = require( './routers/user' )
const taskRouter = require( './routers/task' )
/*****/
const app = express()
const port = 3000
//Multer
const multer = require( 'multer' )
const upload = multer({
    dest : 'images',
    limits : {
        fileSize : 1000000//Byts
    },
    fileFilter( req , file , cb ) {
        if( !file.originalname.endsWith( '.pdf' ) ) {
            return cb( new Error( 'Please upload a PDF' ) )
        }
        cb( undefined , true )
    }
})

const errorMiddleware = ( req , res , next ) => {
    throw new Error( 'From my middleware' )
}

app.post( '/upload' , errorMiddleware , ( req , res ) => {
    res.send()
} , ( error , req , res , next ) => {
    res.status( 400 ).send( {
        error : error.message
    } )
})
/*****/
app.use( express.json() )//For parsing application/JSON
app.use( userRouter )
app.use( taskRouter )
/******/
app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})