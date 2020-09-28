const express = require('express')

const db = require('../db/listings')

const router = express.Router()

router.get('/', (req, res) => {
  db.getList()
    .then(list => {
      return res.json({ list })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getListingById(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/checkinterest', (req, res) => {
  const interest = req.body
  db.checkInterest(interest)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/show', (req, res) => {
  const interest = req.body
  db.showInterest(interest)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/remove', (req, res) => {
  const interest = req.body
  db.removeInterest(interest)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/interest/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getInterestById(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const newListing = req.body
  db.addNewListing(newListing)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/mylist/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyList(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteListing(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/statustwo/:id', (req, res) => {
  const id = Number(req.params.id)
  db.changeStatusToTwo(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/mypearings/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyPearings(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/addpear', (req, res) => {
  // const id = Number(req.params.id)
  const pearId = req.body.pearId
  const id = req.body.id
  console.log(pearId)
  db.addPear(pearId, id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
