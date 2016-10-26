const express = require('express')
const router = express.Router()

// connect other routers here!
router.use('/tenants', require('./tenants'))
router.use('/properties', require('./properties'))

module.exports = router
