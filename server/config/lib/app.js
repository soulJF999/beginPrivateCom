const config = require('../config')
const koa = require('./koa')
const logger = require('./logger')

const init = () => {
  return new Promise((resolve, reject) => {
    let app = koa.init()
    resolve(app)
  })
}

const start = () => {
  init()
    .then(app => {
      app.listen(config.port, config.host, () => {
        // Create server URL
        let server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port
        // Logging initialization
        logger.info('--')
        logger.info(config.app.title)
        logger.info()
        logger.info('Environment:     ' + process.env.NODE_ENV)
        logger.info('Server:          ' + server)
        logger.info('Database:        ' + config.db.uri)
        logger.info('--')
      })
    })
    .catch(err => {
      logger.info(config.port, config.host)
      console.error(err)
    })
}

module.exports = { init, start }
