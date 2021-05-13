require( './src/database/mongoose')
const Task = require( './src/models/task')

/*Task.findByIdAndDelete( '609761e05f9a2213d01bd576' )
    .then( () => {
        console.log( 'Task remove' )
        return Task.find( { completed : false } ).countDocuments()
    }).then( result => console.log( result ) )
    .catch( error => console.log( error) )*/

const deleteTaskAndCount = async ( id ) => {
    await Task.findByIdAndDelete( id ) //No se almacena debido a que no se utiliza
    const count = await Task.find( { completed : false } ).countDocuments()
    return count
}

deleteTaskAndCount( '609887d7d6f92510701769a7' )
    .then( count => console.log( count ) )
    .catch(err => console.log( err ) )