import Koa from 'koa';
import koaBodyparser from 'koa-bodyparser';
import itemRouter from './router/items.router.js';
import payRouter from './router/purchase.router.js';
import customerRouter from './router/customer.router.js';
import traderRouter from './router/trader.router.js';
import promoRouter from './router/promos.router.js';
import cartRouter from './router/cart.router.js';
import wishListRouter from './router/wishlist.router.js';
import cors from "@koa/cors";

const app = new Koa();
app.use(koaBodyparser());

app.use(cors());

app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods());

app.use(payRouter.routes())
    .use(payRouter.allowedMethods());

app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods());

app.use(traderRouter.routes())
    .use(traderRouter.allowedMethods());

app.use(promoRouter.routes())
    .use(promoRouter.allowedMethods());

app.use(cartRouter.routes())
    .use(cartRouter.allowedMethods());

app.use(wishListRouter.routes())
    .use(wishListRouter.allowedMethods());

    // app.use(ctx =>{
    //     ctx.set('Content-Type','text/html');
    //     ctx.body = '<h3>Not found</h3>';
    //     ctx.status = 404;
    // });
    

app.listen(3000,()=>{
    console.log(`Application is running on 3000`)
});