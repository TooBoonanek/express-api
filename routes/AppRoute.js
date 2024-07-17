import express from 'express';
import CategoryRoute from './CategoryRoute.js';


const AppRoute = express.Router();

AppRoute.get('/',(req,res) => {
    res.json({'message': 'Hello API'});
});

// another routes
// category router CRUD
AppRoute.use('/category', CategoryRoute);
// product router CRUD
// user router // authenticated signup(register), signup(login), signout(logout)





AppRoute.get('*',(req,res) => {
    const error = new Error('Not Found');
    res.json({'message': error.message});
});


export default AppRoute;
