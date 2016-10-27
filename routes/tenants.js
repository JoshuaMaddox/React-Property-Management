const express = require('express')
const router = express.Router()

const Tenant = require('../models/Tenant')

router.route('/')
  .get((req, res) => {
    Tenant.find()
      .then(tenants => { res.send(tenants) })
      .catch(err => { res.status(400).send(err) })
  })
  .post((req, res) => {
    Tenant.create(req.body)
      .then(tenant => { 
        res.send(tenant) 
      })
      .catch(err => { res.status(400).send(err) })
  })

  router.route('/:id')
    .get((req, res) => {
      Tenant.findById(req.params.id)
        .populate('tenants')
        .then(tenant => res.send(tenant))
        .catch(err => res.status(400).send(err))
    })
    .delete((req, res) => {
      Tenant.findByIdAndRemove(req.params.id)
        .then(tenant => tenant.save())
        .then(
          Tenant.find()
          .then(tenants => res.send(tenants))
        )
        .catch(err => res.status(400).send(err))
  })
    
  router.route('/edit/:id')
    .put((req, res) => {
      Tenant.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(tenant => {
        res.send(tenant)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    })

// router.route('/:id')
// .put((req, res) => {
//   User.findById(req.params.id)
//   .then(user => user.haveBirthday())
//   .then(user => {
//     res.send(user)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
// })

module.exports = router

// .limit(20)
// .sort({age: 1})
// .sort({age: -1}) - oldest
// .sort({age: -1})
// .limit(3) - top three oldest
// .sort('name.last') by last name
// .sort('-name.last') by decending last name
// .select('age gender') // will limit what fields are returned
// .select('-age')
// .select({
//   age: 1,
//   gender: 1
// })
// .select({
//   age: 1,
//   'name.first': true
// })
