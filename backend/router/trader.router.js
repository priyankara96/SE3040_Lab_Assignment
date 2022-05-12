import Router from '@koa/router';
import {saveTrader,getTrader} from '../api/trader.api.js';

const traderRouter = new Router({
    prefix:'/traders'
});

//Add trader route
traderRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const trader = saveTrader(data);
    ctx.body = trader;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get trader route
traderRouter.get('/:id',(ctx) =>{
    const id = ctx.params.id;
    ctx.body = getTrader(id);
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

export default traderRouter;