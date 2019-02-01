require('dotenv').load()
var _ = require('lodash')
var path = require('path')
module.exports = {

  bot: {
    key: process.env.TELEGRAM_BOT_KEY || '<API_KEY>',
    botanio: {
      key: process.env.BOTANIO_KEY || '<BOTANIO_KEY>'
    },
    polling: {
      interval: 100,
      timeout: 0
    }
  },
  redis: {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS || '127.0.0.1',
    db: 1
  },
  dir: {
    root: path.resolve(__dirname, '../../../')
  },
  defaults: {
    locale: 'ru',
    timezone: 'Europe/Moscow'
  },
  googleMapsKey: process.env.GOOGLE_MAPS_API_KEY || '<GOOGLE_MAPS_KEY>',

};

// try to require local config
try {
  _.merge(module.exports, require('./local'));
} catch (e) {

}
