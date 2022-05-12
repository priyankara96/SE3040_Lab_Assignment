import Router from '@koa/router';
import {save} from '../api/purchase.api.js';

const payRouter = new Router({
    prefix:'/payments'
});

//Add purchase route
payRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const pay = save(data);
    ctx.body = pay;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

export default payRouter;