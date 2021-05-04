/*const mongodb = require( 'mongodb' )
const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectId => */

const { MongoClient , ObjectId } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log( id )
console.log( id.id )
console.log( id.id.length )
console.log( id.toHexString() )
console.log( id.toHexString().length )
console.log( id.getTimestamp() )

MongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {//CALLBACK
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    const db = client.db( databaseName )

    /*db.collection( 'users' ).insertOne({
        _id : id,
        name : 'Pablo',
        age : 25
    } , ( error , result ) => {
        if( error ) {
            return console.log( 'Unable to insert user' )
        }
        console.log( result.ops )
    })*/

    /*db.collection( 'users' ).insertMany([
        {
            name : 'Jen',
            age : 28
        },
        {
            name : 'Gunter',
            age : 27
        }
    ] , ( error , result ) => {
        if( error ) {
            return console.log( 'Unable to inser documents!' )
        }
        console.log( result.ops );
    })*/

    /*db.collection( 'task' ).insertMany([
        {
            description : 'First task',
            completed : true
        },
        {
            description : 'Example of task',
            completed : true
        },
        {
            description : 'Buy weather',
            completed : false
        }
    ] , ( error , result ) => {
        if( error ) {
            return console.log( 'Unable to insert tasks!' )
        }
        console.log( result.ops );
    })*/
    
})