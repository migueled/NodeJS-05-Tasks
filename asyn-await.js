/*********************
/*********************
const doWork = () => {
    salida undefined
}
*********************/
const add = ( a , b ) => {
    return new Promise( ( resolve , reject ) => {
        setTimeout( () => {
            if( a < 0 || b < 0) {
                reject( 'Numbers must be non-negative' )
            }
            resolve( a + b )
        } , 2000)
    })
}

const doWork = async () => {
    const sum1 = await add( 1 , 5)
    const sum2 = await add( sum1 ,94 )
    const sum3 = await add( sum2 , -5)
    return sum3
    /*throw new Error( 'Something' )
    return 'Miguel'*/
}

/*console.log( doWork() )*/

doWork()
    .then( result => console.log( result ) )
    .catch( error => console.log( error ) )