// module for server
import Koa from 'koa';
import qs from 'koa-qs';
import Router from 'koa-router';
// import { HttpError } from '../src/Http/Error';
import bodyParser from 'koa-bodyparser';
// import validate from 'koa-validate';
import codes from 'builtin-status-codes';

export default class App {
  constructor(routes) {
    const router = new Router();
    this.app = new Koa();

    this.app.use(bodyParser({
      enableTypes: [ 'json' ]
    }));
    this.app.use(this.json);

    // TODO: Add logger

    // TODO: validate(this.app);

    routes(router);
    this.app.use(router.routes());
  }

  async json(ctx, next) {
    ctx.json = (payload, status = 200, message) => {
      ctx.type = 'application/json';
      ctx.status = status;
      ctx.message = message;
      ctx.body = payload;
    };
    await next();
  }

  listen(port, fn) {
    this.app.listen(port, (err) => {
      if (fn) {
        return fn(err);
      }
      console.log(err || `Server run on ${port}`);
    })
  }
}

const boot = (routes, port, fn) => {
  const api = new App(routes);

  api.listen(port, fn);
}

export { boot };
