import Router from '@koa/router';
import {get,save, getAll,update,deleteItem} from '../api/items.api.js';

const itemRouter = new Router({
    prefix:'/items'
});

//Add item route
itemRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const item = save(data);
    ctx.body = item;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get item route
itemRouter.get('/:id',(ctx) =>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

//get all items route
itemRouter.get('/',(ctx) =>{
    ctx.body = getAll();
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

//update item route
itemRouter.put('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id,ctx.request.body);
    ctx.set('Content-Type','application.json');
    ctx.status=200;
});

//delete item route
itemRouter.del('/:id',(ctx) => {
    const id = ctx.params.id;
    deleteItem(id);
    ctx.status=204;
});

export default itemRouter;