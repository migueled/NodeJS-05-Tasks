require( './src/database/mongoose')
const User = require( './src/models/user')

/*User.findByIdAndUpdate( '60987b5b7b8d690cac033013' , { age : 1 } )
    .then( user => {
        console.log( user )
        return User.countDocuments( { age : 1 })
    }).then( result => {
        console.log( result )
    }).catch( error => console.log( error ) )*/

const updateAgeAndCount = async ( id , age ) => {
    const user = await User.findByIdAndUpdate( id , { age } )
    const count = await User.countDocuments( { age } )
    return count
}

updateAgeAndCount( '60987b5b7b8d690cac033013' , 2 )
    .then( count => console.log( count ) )
    .catch( error => console.log( error ) )