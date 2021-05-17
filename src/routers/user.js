const express = require( 'express' )
const router = new express.Router()

const User = require( '../models/user' )

router.post( '/users' , async ( req , res ) => {
    const newUser = new User( req.body )
    try {
        newUser.save()
        res.status( 201 ).send( newUser )
    } catch (error) {
        res.status( 400 ).send( error )
    }
})

router.get( '/users' , async ( req , res ) => {
    try {
        const users = await User.find({})
        res.status( 200 ).send( users )
    } catch (error) {
        res.status( 500).send( error )
    }
})

router.get( '/users/:id' , async ( req , res ) => {
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

router.patch( '/users/:id' , async ( req , res ) => {
    const updates = Object.keys( req.body )
    const allowUpdates = [ 'name' , 'email' , 'password' , 'age' ]
    const isValidOperation = updates.every( update => allowUpdates.includes( update ) )
    if( !isValidOperation ) {
        return res.status( 400 ).send( { error : 'Invalid updates!' } )
    }
    try {
        const user = await User.findByIdAndUpdate( req.params.id , req.body , { new : true , runValidators : true } )
        if( !user ) {
            return res.status( 404 ).send()
        }
        res.send( user )
    } catch (error) {
        res.status( 400 ).send( error )
    }
})

router.delete( '/users/:id' , async ( req , res ) => {
    try {
        const userDelete = await User.findByIdAndDelete( req.params.id )
        if( !userDelete ) {
            return res.status( 404 ).send( {} )
        }
        res.send( userDelete )
    } catch (error) {
        res.status( 500 ).send( e )
    }
})

module.exports = router