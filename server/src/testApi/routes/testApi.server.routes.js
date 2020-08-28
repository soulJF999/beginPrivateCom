const logger = require('../../../config/lib/logger')
const handleTest = (req, res) => {
  if (req.path === '/api/home/getMockData') {
    return {
      code: 0,
      data: 'hello'
    }
  }
}

module.exports = (router) => {
  router.post('/api/home/getMockData', testLogic)
}

const testMiddle = async (ctx) => {
  return await testLogic(ctx)
}

const testLogic = async (ctx, url) => {
  ctx.status = 200
  ctx.body = {
    code: 0, data: 'hello'
  }
  return ctx
}
