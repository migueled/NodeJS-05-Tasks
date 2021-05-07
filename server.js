const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    /*db.collection( 'users' ).findOne( { _id : new ObjectId( '6090f7fd7c2bfa23f8e34e25' ) } , ( error , data ) => {
        if ( error ) { return console.log( 'unable to fetch' ) }
        console.log( data )
    })

    const query = {
        age : 25
    }
    db.collection( 'users' ).find( query ).toArray( ( error , users ) => {
        console.log( users )
    })*/

    db.collection( 'task' ).find().toArray( ( error , data ) => {
        console.log( data[ data.length -1 ] )
    })

    db.collection( 'task' ).find( { completed : false } ).toArray( ( error , data ) => {
        console.log( data ) 
    })
})