const add = ( a , b ) => {
    return new Promise( ( resolve , reject ) => {
        setTimeout( () => {
            resolve( a + b )
        } , 2000)
    })
}

/*add( 1 , 5)
    .then( sum => {
        console.log( sum )
        add( sum , 5 )
            .then( suma2 => console.log( suma2 ) )
            .catch( error => console.log( error ) )
    })
    .catch( error => console.log( error ) )*/
    /*
    No es la forma correcta de usar esta opcion
    Cuanto ma´s tareas asíncronas intentamos realizar,
    más codificado y complejo es nuestro codigo.
        - Código duplicado para los errores

    -Hay una manera de hacerlo mejor usando Promise chaining
    */

add( 1 , 2 )
    .then( suma => {
        console.log( suma )
        return add( suma , 5 )
    }).then( suma2 => console.log( suma2) )
    .catch( error => console.log( error ) )