const SailboatRoutes = require('express').Router()
 
 
const {   getAllSailboats, getSailboat, } = require('./sailboat.controller')


SailboatRoutes.get('/', getAllSailboats)
SailboatRoutes.get('/:id', getSailboat)
  

module.exports = SailboatRoutes