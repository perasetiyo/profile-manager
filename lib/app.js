/* eslint-disable no-console */
/** @module KirimoApi*/
import Koa from 'koa';
import qs from 'koa-qs';
import Router from 'koa-router';
import convert from 'koa-convert';
import { HttpError } from './error';
import bodyParser from 'koa-bodyparser';
import validate from 'koa-validate';
import codes from 'builtin-status-codes';

/** Class representing KirimoApi */
export default class App {
    constructor(routes) {
        const router = new Router();
        this.app = new Koa();
        qs(this.app, 'first');
        this.app.use(bodyParser({
            enableTypes: [ 'json', 'form' ],
            formLimit: '1mb',
            jsonLimit: '1mb'
        }));
        this.app.use(this.json);
        this.app.use(this.plain);
        this.app.use(this.error);

        convert(validate);
        validate(this.app);

        this.app.use(this.state);

        // TODO: Add logger

        routes(router);
        this.app.use(router.routes())
            .use(router.allowedMethods({ throw: true }));

    }

    async state(ctx, next) {
        const { method = 'GET', url = '/', headers = {} } = ctx.req,
            { query = {}, params = {} } = ctx,
            { body = {} } = ctx.request;
        ctx.state = {
            method,
            url,
            headers,
            query,
            params,
            body
        };
        if (process.env.NODE_DEBUG) {
            console.log(JSON.stringify(ctx.state));
        }
        await next();
    }

    async plain(ctx, next) {
        ctx.plain = (payload, status = 200) => {
            ctx.type = 'text/plain';
            ctx.status = status;
            ctx.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
        };

        await next();
    }

    async json(ctx, next) {
        ctx.json = (payload, status = 200) => {
            ctx.type = 'application/json';
            ctx.status = status;
            ctx.body = payload;
        };
        await next();
    }

    async error(ctx, next) {
        try {
            await next();
        } catch (error) {
            if (!(error instanceof HttpError)) {
                let code = `${error.code}`;
                code = parseInt(code.substr(0, 3)) || 500;
                code = codes[error.code] ? error.code : 500;
                error.code = code;
            }

            let { message, internal, errors } = error;
            message = message || codes[error.code];
            ctx.json({ message, code: internal || '500001', errors }, error.code);

            if (process.env.NODE_DEBUG && process.env.NODE_ENV !== 'test') {
                console.log(error.stack);
            } else if (process.env.NODE_ENV === 'test') {
                console.log(error.message);
            }
        }
    }

    listen(port, fn) {
        this.app.listen(port, (err) => {
            if (fn) {
                return fn(err);
            }
            console.log(err || `~> up! ${port}`);
        });
    }
}

const boot = (routes, port, fn) => {
    const server = new App(routes);
    server.listen(port, fn);
};

export { boot };
