const express = require('express')
const router = express.Router()

const Landlord = require('../models/Landlord')

router.route('/')
  .get((req, res) => {
    Landlord.find()
      .then(landlords => { res.send(landlords) })
      .catch(err => { res.status(400).send(err) })
  })
  .post((req, res) => {
    Landlord.create(req.body)
      .then(landlord => { res.send(landlord) })
      .catch(err => { res.status(400).send(err) })
  })

router.route('/:id')
  .get((req, res) => {
    Landlord.findById(req.params.id)
      .populate('tenants')
      .then(landlord => res.send(landlord))
      .catch(err => res.status(400).send(err))
  }) 

router.put('/:landlordId/addLandlord/:landlordId', (req, res) => {
  let { landlordId, tenantId } = req.params;
  Landlord.findById(landlordId)
    .then( group => {
      landlord.tenants.push(tenantId)
      return group.save()
    })
    .then(savedLandlord => {
      res.send(savedLandlord)
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