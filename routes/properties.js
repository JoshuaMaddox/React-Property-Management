const express = require('express')
const router = express.Router()

const Property = require('../models/Property')

router.route('/')
  .get((req, res) => {
    Property.find()
      .then(properties => { res.send(properties) })
      .catch(err => { res.status(400).send(err) })
  })
  .post((req, res) => {
    Property.create(req.body)
      .then(property => { res.send(property) })
      .catch(err => { res.status(400).send(err) })
  })

router.route('/edit/:id')
  .put((req, res) => {
    Property.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
    .then(property => {
      res.send(property)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.route('/:id')
  .get((req, res) => {
    Property.findById(req.params.id)
      .populate('tenants')
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err))
  })
  .delete((req, res) => {
    Property.findByIdAndRemove(req.params.id)
      .then(client => client.save())
      .then(
        Property.find()
        .then(properties => res.send(properties))
      )
      .catch(err => res.status(400).send(err))
  })

router.put('/:PropertyId/addProperty/:PropertyId', (req, res) => {
  let { PropertyId, tenantId } = req.params;
  Property.findById(PropertyId)
    .then( property => {
      Property.tenants.push(tenantId)
      return property.save()
    })
    .then(savedProperty => {
      res.send(savedProperty)
    })
    .catch(err => res.status(400).send(err))
})

module.exports = router

// router.route('/:id')
//   .get((req, res) => {
//     Group.findById(req.params.id)
//       .then(group => res.send(group))
//       .catch(err => res.status(400).send(err))
//   })