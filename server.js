// Import prerequisite packages
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');

// Initialize KoaJs server and router
const server = new Koa();
const router = new Router();

// Initialize NextJs instance and expose request handler
const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();
global.SERVER_APP_ROOT = __dirname;
const dataProvider = require(SERVER_APP_ROOT + '/libs/dataProvider');

(async () => {
    try {
        await nextApp.prepare();
        router.get('/custom-page', async ctx => {
            await nextApp.render(ctx.req, ctx.res, '/myHandlerComponent', ctx.query);
            ctx.respond = false;
        });

        router.get('/api/country', async ctx => {
            ctx.body = dataProvider.countryList();
        });

        router.get('*', async ctx => {
            await handler(ctx.req, ctx.res);
            ctx.respond = false;
        });

        

        server.use(router.routes());
        server.listen(3000, _ => console.log('App running on port 3000'));
    } catch (e) {
        console.error(e);
        process.exit();
    }
})();
