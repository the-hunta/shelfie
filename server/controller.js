module.exports = {
getAllProdcuts: (req, res) => {
    const db = req.app.get('db');

    db.get_all_products().then(resp => {
        res.status(200).send(resp);
        
    })
},
getProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_product([id]).then(resp => {
        res.status(200).send(resp[0]);
    }).catch(err => console.log(err))
},

createProduct: (req, res) => {
    const db = req.app.get('db');
    const { product } = req.body;

    db.create_product([product]).then(resp => {
        res.status(200).send(resp);
        
    })
},
deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product([id]).then(resp => {
        res.status(200).send(resp);
    });
},
updateProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { product } = req.body;

    db.update_product([id, product]).then(resp => {
        res.status(200).send(resp);
        
    })
}

}