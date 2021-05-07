const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    db.collection('users').findOne( { name : 'Miguel' } , ( error , data ) => {
        if ( error ) { return console.log( 'unable to fetch' ) }
        console.log( data )
    })
})