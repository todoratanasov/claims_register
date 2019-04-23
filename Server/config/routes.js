const authRoutes = require('../routes/auth')
const statsRoutes = require('../routes/stats')
const claimRoutes = require("../routes/claim");

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/stats', statsRoutes)
  app.use('/claim', claimRoutes)
}
