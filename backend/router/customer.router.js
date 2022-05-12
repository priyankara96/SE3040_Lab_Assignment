import Router from '@koa/router';
import {saveCustomer,getCustomer,getAllCustomers} from '../api/customer.api.js';

const customerRouter = new Router({
    prefix:'/customers'
});

//Add customer route
customerRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const customer = saveCustomer(data);
    ctx.body = customer;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get customer route
customerRouter.get('/:id',(ctx) =>{
    const id = ctx.params.id;
    ctx.body = getCustomer(id);
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

//get all customer route
customerRouter.get('/',(ctx) =>{
    ctx.body = getAllCustomers();
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

export default customerRouter;