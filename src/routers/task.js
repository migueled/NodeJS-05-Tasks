const express = require( 'express' )
const router = new express.Router()

const Task = require( '../models/task' )

router.post( '/tasks' , async ( req , res ) => {
    const newTask = new Task( req.body )
    try {
        await newTask.save()
        res.status( 201 ).send( newTask )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
})

router.get( '/tasks' , async ( req , res ) => {
    try {
        const tasks = await Task.find({})
        res.status( 200 ).send( tasks )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

router.get( '/tasks/:id' , async ( req , res ) => {
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

router.patch( '/tasks/:id' , async ( req , res ) => {
    const updates = Object.keys( req.body )
    const allowUpdates = [ 'completed' , 'description' ]
    const isValidOperation = updates.every( update => allowUpdates.includes( update ) )
    
    if( !isValidOperation ) {
        return res.status( 400 ).send( { error : 'Invalid updates!' } )
    }

    try {
        if( !req.body ) {
            return res.status( 404 ).send({})
        }

        const task = await Task.findById( req.params.id )
        updates.forEach( update => task[update] = req.body[update] )
        await task.save()
        if( !task ) {
            return res.status( 404 ).send()
        }
        res.status( 200 ).send( task )
    } catch ( error ) {
        res.status( 500 ).send( error )
    }
})

router.delete( '/tasks/:id' , async ( req , res ) => {
    try {
        const taskDelete = await Task.findByIdAndDelete( req.params.id )
        if( !taskDelete ) {
            return res.status( 404 ).send( {} )
        }
        res.send( taskDelete )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

module.exports = router