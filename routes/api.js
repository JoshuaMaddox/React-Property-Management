const express = require('express')
const router = express.Router()

// connect other routers here!
router.use('/tenants', require('./tenants'))
router.use('/landlords', require('./landlords'))

module.exports = router
