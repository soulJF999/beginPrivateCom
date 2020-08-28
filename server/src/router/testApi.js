const logger = require('../../config/lib/logger')
const handleTest = (req, res) => {
  logger.info(req)
  if (req.path === '/api/home/getMockData') {
    return {
      code: 0,
      data: 'hello'
    }
  }
}

module.exports = handleTest
