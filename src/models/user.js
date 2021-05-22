const mongoose = require( 'mongoose' )
const validator = require( 'validator' )

const userModel = {
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        validate( value ) {
            if( !validator.isEmail( value) ) {
                throw new Error ( 'Email is invalid' )
            }
        }
    },
    password :{
        type : String,
        required : true,
        minLength : 6,
        trim : true,
        validate( value ) {
            if( value.toLowerCase().includes( 'password' ) ) {
                throw new Error ( 'Password cannot contain "password"' )
            }
        }

    },
    age : {
        type : Number,
        default : 0,
        validate( value ) {
            if( value < 0 ) {
                throw new Error( 'Age must be a positive number' )
            }
        }
    }
}

const UserSchema = new mongoose.Schema( userModel )

UserSchema.pre( 'save' , async function ( next ) { // nombre del evento a ejecutar seguido de una funcion normal
    //nunca arrow function
    const user = this
    console.log( 'Just before saving!' )
    next()//Obligatorio para salir de esta funcion
})

const User = mongoose.model( 'Users' , UserSchema )

module.exports = User