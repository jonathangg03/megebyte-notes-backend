const express = require('express')
const Notes = require('../models/notes')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await Notes.find().sort('category')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const data = await Notes.findById(req.params.id).sort('category')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = new Notes({
      ...req.body
    })
    await data.save()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const data = await Notes.findByIdAndUpdate(req.params.id, {
      ...req.body,
      _id: req.params.id
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.id)
    res.status(200).json('Note deleted')
  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = router
