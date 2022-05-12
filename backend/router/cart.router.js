import Router from '@koa/router';
import {saveCartItem,getAllCartItems} from '../api/cart.api.js';

const cartRouter = new Router({
    prefix:'/cartitems'
});

//Add cart item route
cartRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const cartItem = saveCartItem(data);
    ctx.body = cartItem;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get all items route
cartRouter.get('/',(ctx) =>{
    ctx.body = getAllCartItems();
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

export default cartRouter;