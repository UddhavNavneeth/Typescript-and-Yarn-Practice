import express from 'express';
import bodyParser from 'body-parser';

import Product from './model/product';

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Aloha crew mates !!');
});

app.get('/get', async (req, res) => {
    const products = await Product.find();
    res.send(products)
});

app.post('/add', async (req, res) => {
    const newProduct = new Product(req.body); 
    const product = await newProduct.save();
    res.send(product);
});

app.post('/update', async (req, res) => {
    // let existingProduct : {
    //     id: string,
    //     productName: string,
    //     type: string
    // };

    const existingProduct = await Product.findById(req.body.id);

    if (!existingProduct) {
        res.send('No such product exists for given id');
    }
    else {

        if (typeof req.body.productName === "string") {
            existingProduct.productName = req.body.productName;
        }

        if (typeof req.body.type === "string") {
            existingProduct.type = req.body.type;
        }

        const updatedProduct = await existingProduct.save();
        res.send(updatedProduct);

    }
    
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})