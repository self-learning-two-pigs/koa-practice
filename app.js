const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.request.path+':'+ctx.request.method);
  await next();
});

router.get('/test', async (ctx, next) => {
  ctx.response.body = 'hello word';
});

router.get('/object-test', async (ctx, next) => {
  ctx.response.body = { a: 1 };
});

app.use(router.routes());

app.listen(3000);