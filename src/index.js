const express = require( 'express' )
/*****/
require( './database/mongoose')
const User = require( './models/user' )
/*****/
const app = express()
const port = 3000

app.use( express.json() )//For parsing application/JSON

/******/
app.post( '/users' , ( req , res ) => {
    const newUser = new User( req.body )
    newUser.save()
        .then( () => {
            res.status( 201 ).send( newUser )
        }).catch( ( error ) => {
            console.log( error )
            res.status( 400 ).send( error )
        })
})
/******/

app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})