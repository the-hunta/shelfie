require('dotenv').config();
const express = require('express');
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database')
});

//end points
app.get('api/products', ctrl.getAllProdcuts);

app.get('api/prodcut/:id', ctrl.getProduct);

app.post('api/product', ctrl.createProduct);

app.delete('api/product/:id', ctrl.deleteProduct);

app.put('api/product/:id', ctrl.updateProduct);


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
