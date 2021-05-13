require( './src/database/mongoose')
const User = require( './src/models/user')
const Task = require( './src/models/task')
/*User.findByIdAndUpdate( '60987b5b7b8d690cac033013' , { age : 1 } )
    .then( user => {
        console.log( user )
        return User.countDocuments( { age : 1 })
    }).then( result => {
        console.log( result )
    }).catch( error => console.log( error ) )*/

Task.findByIdAndDelete( '609761e05f9a2213d01bd576' )
    .then( () => {
        console.log( 'Task remove' )
        return Task.find( { completed : false } ).countDocuments()
    }).then( result => console.log( result ) )
    .catch( error => console.log( error) )
