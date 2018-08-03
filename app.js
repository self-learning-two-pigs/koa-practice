const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const todoService = require('./todo');
const todo = new todoService();
const bodyParser = require('koa-bodyparser');

app.use(async (ctx, next) => {
  console.log(ctx.request.path+':'+ctx.request.method);
  await next();
});

app.use(bodyParser({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

router.get('/todo-list', async (ctx, next) => {
  ctx.response.body = todo.getTodoList();
});

router.get('/test', async (ctx, next) => {
  ctx.response.body = 'hello word';
});

router.post('/todo-list/add', async (ctx, next) => {
  todo.addTodo(ctx.request.body.title);
  ctx.response.body = { title: ctx.request.body.title };
});

router.put('/todo-list/update', async (ctx, next) => {
  todo.updateTodo(ctx.request.body.index, ctx.request.body.title);
  ctx.response.body = { title: ctx.request.body.title };
});

app.use(router.routes());

app.listen(3000);