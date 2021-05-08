const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    /*const deleteUserBy = {
        age : 25
    }

    db.collection( 'users' ).deleteMany( deleteUserBy )
    .then( ( result ) => {
        console.log( result )
    }).catch( ( error ) => {
        console.log( error )
    })*/

    const deleteTaskBy = {
        description : 'First task'
    }

    db.collection( 'tasks' ).deleteOne( deleteTaskBy )
    .then( ( result ) => {
        console.log( result )
    }).catch( ( error ) => {
        console.log( error )
    })

})