const BoatRoutes = require('express').Router()
 
const {  getAllBoats, getBoat,    } = require('./boat.controller')


BoatRoutes.get('/', getAllBoats)
BoatRoutes.get('/:id', getBoat)
 

module.exports = BoatRoutes