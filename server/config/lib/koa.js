process.env.VUE_ENV = 'server'
const IS_PROD = process.env.NODE_ENV === 'production'
const path = require('path')
const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const passport = require('koa-passport')
const session = require('koa-session')
const MongooseStore = require('koa-session-mongoose')
const lusca = require('koa-lusca')
const helmet = require('koa-helmet')
const mime = require('mime')
const logger = require('./logger')
const _ = require('lodash')
const config = require('./../config')

const initMorganHttpLogger = (app) => {
  if (_.has(config, 'log.format')) {
    app.use(morgan(logger.getLogFormat(), {
      ...logger.getMorganOptions()
    }))
  }
}

const initHeaders = (app) => {
  app.use(cors({
    credentials: true
  }))
}

const initParsers = (app) => {
  app.use(bodyParser({
    jsonLimit: '50mb'
  }))
  app.use(session({
    ...config.sessionOptions,
    store: new MongooseStore()
  }, app))
}

const initSecures = (app) => {
  app.use(helmet())
  app.use(lusca(config.csrf))
}

const correctMimeTypes = (app) => {
  app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/api/')) {
      ctx.type = 'json'
    } else {
      ctx.type = mime.lookup(ctx.path)
    }
    await next()
  })
}

const initPassport = (app) => {
}

const initApiRoutes = (router) => {
  // Set api and dist that not exist as 404
  router.all(/^\/api(?:\/|$)|(^\/dist(?:\/|$))/, ctx => {
    ctx.body = 'Not Found'
    ctx.type = 'text'
    ctx.status = 404
  })
}

const initErrorRoutes = (router) => {
  router.all
}

module.exports.init = () => {
  const app = new Koa()
  const router = new Router()
  app.keys = [config.sessionOptions.key]
  if (!IS_PROD) {
    correctMimeTypes(app)
  }
  initMorganHttpLogger(app)
  initHeaders(app)
  initSecures(app)
  initParsers(app)
  initPassport(app)
  initApiRoutes(app)
  initErrorRoutes(app)
  app
    .use(router.routes())
    .use(router.allowedMethods())
  app.on('error', (err, ctx) => {
    logger.error(`[SERVER ERROR] original url : ${ctx.originalUrl}`, err.message)
  })
  return app
}
