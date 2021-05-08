const mongoose = require( 'mongoose' )
//mongodb://localhost/my_database
const dataBase = 'mongodb://127.0.0.1:27017/task-manager-api'

const configMongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

const modelUser = {
    name : {
        type : String
    },
    age : {
        type : Number
    }
}

mongoose.connect( dataBase , configMongoose )

const User = mongoose.model( 'User' , modelUser )

const dataMe = {
    name : 'Eduardo',
    age : '27'
}

const me = new User( dataMe )

me.save()
    .then( () => {
        console.log( me)
    }).catch( ( error ) => {
        console.log( 'Error : ' , error )
    })