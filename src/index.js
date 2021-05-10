const express = require( 'express' )
/*****/
require( './database/mongoose')
const User = require( './models/user' )
const Task = require( './models/task')
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

app.get( '/users' , ( req , res ) => {
    User.find({})
        .then( data => res.status( 200 ).send( data ) )
        .catch( error => res.status( 500).send( error ) )
})

app.get( '/users/:id' , ( req , res ) => {
    const _id = req.params.id

    User.findById( _id )
        .then( user => {
            if( !user ) {
                return res.status( 404 ).send()
            }

            res.status( 200 ).send( user )
        }).catch( error => res.status( 500 ).send( error ) )
})

app.post( '/tasks' , ( req , res ) => {
    const newTask = new Task( req.body )
    newTask.save()
        .then( () => {
            res.status( 201 ).send( newTask )
        }).catch( ( error ) => {
            console.log( error )
            res.status( 400 ).send( error )
        })
})

app.get( '/tasks' , ( req , res ) => {
    Task.find({})
    .then( data => res.status( 200 ).send( data ) )
    .catch( error => res.status( 500 ).send( error ) )
})

app.get( '/tasks/:id' , ( req , res ) => {
    const _id = req.params.id
    
    Task.findById( _id )
        .then( data => {
            if( !data ) {
                return res.status( 404 ).send({})
            }
            res.status( 200 ).send( data )
        }).catch( error => res.status( 500 ).send( error ) )
})
/******/

app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})