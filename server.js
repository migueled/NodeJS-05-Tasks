const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    const filterUpdate = {
        completed : false
    }
    
    const newCompleted = {
        $set : {
            completed : true
        }
    }

    db.collection( 'tasks' ).updateMany( filterUpdate , newCompleted )
    .then( ( result ) => {
        console.log( result.modifiedCount )
    })
    .catch( ( error ) => {
        console.log( error )
    })
})