process.env.VUE_ENV = 'server'
const IS_PROD = process.env.NODE_ENV === 'production'
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const password = require('koa-passport')
const session = require('koa-session')
const MongooseStore = require('koa-session-mongoose')
const lusca = require('koa-lusca')
const helmet = require('koa-helmet')
