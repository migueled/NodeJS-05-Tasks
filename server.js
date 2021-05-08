const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    const userIdUpdate = {
        _id : new ObjectId( '60910982c836343270e5192f' )
    }
    
    const setUserNewData = {
        $set : {
            name : 'Pablo Olivas'
        }
    }

    const updatePromise = db.collection( 'users' ).updateOne( userIdUpdate , setUserNewData )
    .then( ( result ) => {
        console.log( result )
    })
    .catch( ( error ) => {
        console.log( error )
    })
})