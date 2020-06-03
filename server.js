

const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

//para el puerto de heroku
const port = process.env.PORT || 3000;

//middleware es una instrucción que siempre se ejecuta sin importar a qué url nos metamos
//sería como el master.blade

app.use( express.static( __dirname + '/public' ) );


//express hbs engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  
    res.render('home',{
        nombre: 'ismael péRez',
        
    });
    //funcion send detecta que es un objeto y automáticamente lo serializa como un json
});

app.get('/about', (req, res) => {
    res.render('about');
});


//estamos haciendo una petición get cualquier ruta con /... 
//app.get('/', (req, res) => {
//  //res.send('Hola Mundo')
//    let salida = {
//        nombre: 'Ismael',
//        edad: 25,
//        url: req.url
//    };
//    //para que sea un aplication json, o sea obtener el obbjeto
//    res.send(salida);
//    //funcion send detecta que es un objeto y automáticamente lo serializa como un json
//});


//vamos a crear una nueva dirección     /data

 
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${ port }`);
});