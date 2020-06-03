
//ya biene en el node

const http = require('http');


//creamos el server
http.createServer((req, res) =>{

    res.write('hola mundo');

    //indicamos que termina la respuesta
    res.end();
})

//una vez creado debemos configurar qué puerto va a escuchar
.listen(8080);

console.log('escuchando el puerto 8080');