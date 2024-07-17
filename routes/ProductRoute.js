import express from "express";

const ProductRoute = express.Router();


// Create Read Update Delete = CRUD
const products = [
    {id: 1, name: 'iPhone 15', price: 42000},
    {id: 2, name: 'Samsung S23', price: 45000},
    {id: 3, name: 'Oppo O18', price: 12000},
    {id: 4, name: 'Vivo V15', price: 10000},
];

ProductRoute.get('/', (req, res) => {
    res.status(200).json(products);
});


ProductRoute.get('/:id', (req, res) => {
    // const id = req.params.id;
       const { id } = req.params;
       const product = products.filter(p => p.id === +id);
       if (!product) return res.status(404).json({ message: 'Product not found' });
       res.status(200).json(product);
});




export default ProductRoute;
