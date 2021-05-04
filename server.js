const mongodb = require( 'mongodb' )
const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongoClient.connect( connectionURL , { useNewUrlParser : true , useUnifiedTopology: true } , ( error , client ) => {
    if( error ) {
        return console.log( 'Unable to connect to database' );
    }
    console.log( 'Connected correctly!' );
})