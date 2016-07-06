/**
 * Created by tomo on 2016-06-21.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod.js')
} else {
  module.exports = require('./Root.dev.js')
}
