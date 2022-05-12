import Router from '@koa/router';
import {savePromo,getAllPromos} from '../api/promos.api.js';

const promoRouter = new Router({
    prefix:'/promos'
});

//Add promos route
promoRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const promo = savePromo(data);
    ctx.body = promo;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get all promos route
promoRouter.get('/',(ctx) =>{
    ctx.body = getAllPromos();
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

export default promoRouter;