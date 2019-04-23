const authRoutes = require('../routes/auth')
const statsRoutes = require('../routes/stats')
const claimRoutes = require("../routes/claim");
const claimDetails = require('./controllers/claim-controller')
const homeRoute = require("../routes/home");
const visit = require("./controllers/visit-controller");
const userController = require("./controllers/user-controller");

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/stats', statsRoutes)
  app.use('/claim', claimRoutes)
  app.use('/home', homeRoute)
  app.get('/claimdetails:id', claimDetails.claimDetail)
  app.put('/editclaim:id', claimDetails.claimEdit)
  app.post('/createvisit:id', visit.visitCreate)
  app.post("/register", userController.createUser)
  
}
