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
app.post( '/users' , async ( req , res ) => {
    const newUser = new User( req.body )
    try {
        newUser.save()
        res.status( 201 ).send( newUser )
    } catch (error) {
        res.status( 400 ).send( error )
    }
})

app.get( '/users' , async ( req , res ) => {
    try {
        const users = await User.find({})
        res.status( 200 ).send( users )
    } catch (error) {
        res.status( 500).send( error )
    }
})

app.get( '/users/:id' , async ( req , res ) => {
    const _id = req.params.id

    try {
        const user = await User.findById( _id )
        if( !user ) {
            return res.status( 404 ).send()
        }
    
        res.status( 200 ).send( user )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

app.patch( '/users/:id' , async ( req , res ) => {
    const updates = Object.keys( req.body )
    const allowUpdates = [ 'name' , 'email' , 'password' , 'age' ]
    const isValidOperation = updates.every( update => allowUpdates.includes( update ) )
    if( !isValidOperation ) {
        return res.status( 400 ).send( { error : 'Invalid updates!' } )
    }
    try {
        const user = await User.findByIdAndUpdate( req.params.id , req.body , { new : true , runValidators : true } )
        if( !user ) {
            res.status( 404 ).send()
        }
        res.send( user )
    } catch (error) {
        res.status( 400 ).send( error )
    }
})
//--------
app.post( '/tasks' , async ( req , res ) => {
    const newTask = new Task( req.body )
    try {
        await newTask.save()
        res.status( 201 ).send( newTask )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
})

app.get( '/tasks' , async ( req , res ) => {
    try {
        const tasks = await Task.find({})
        res.status( 200 ).send( tasks )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

app.get( '/tasks/:id' , async ( req , res ) => {
    const _id = req.params.id
    try {
        const task = await Task.findById( _id )
        if( !task ) {
            return res.status( 404 ).send({})
        }
        res.status( 200 ).send( task )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})
/******/

app.listen( port , () => {
    console.log( `Server is up on port ${ port }`);
})