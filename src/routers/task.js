const express = require( 'express' )
const router = new express.Router()
const Task = require( '../models/task' )
const auth = require( '../middleware/auth' )

router.post( '/tasks' , auth , async ( req , res ) => {
    const newTask = new Task({
        ...req.body,
        owner : req.user._id
    })

    try {
        await newTask.save()
        res.status( 201 ).send( newTask )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
})

//GET /tasks?completed=true
router.get( '/tasks' , auth , async ( req , res ) => {
    const match = {}

    if( req.query.completed ) {
        match.completed = req.query.completed === 'true'
    }

    try {
        await req.user.populate({
            path : 'tasks',
            match
        }).execPopulate()

        res.status( 200 ).send( req.user.tasks )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

router.get( '/tasks/:id' , auth , async ( req , res ) => {
    const _id = req.params.id
    try {
        const task = await Task.findOne({ _id , owner : req.user._id })
        if( !task ) {
            return res.status( 404 ).send({})
        }
        res.status( 200 ).send( task )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

router.patch( '/tasks/:id' , auth , async ( req , res ) => {
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

        const task = await Task.findOne({ _id : req.params.id , owner : req.user._id })

        if( !task ) {
            return res.status( 404 ).send()
        }

        updates.forEach( update => task[update] = req.body[update] )
        await task.save()

        res.status( 200 ).send( task )
    } catch ( error ) {
        res.status( 500 ).send( error )
    }
})

router.delete( '/tasks/:id' , auth , async ( req , res ) => {
    try {
        const taskDelete = await Task.findOneAndDelete({ _id : req.params.id , owner : req.user._id })
        if( !taskDelete ) {
            return res.status( 404 ).send( {} )
        }
        res.send( taskDelete )
    } catch (error) {
        res.status( 500 ).send( error )
    }
})

module.exports = router