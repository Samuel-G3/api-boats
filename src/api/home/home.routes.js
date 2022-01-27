const HomeRoutes = require('express').Router()
 
const { getAllHomes, getHome } = require('./home.controller')


HomeRoutes.get('/', getAllHomes)
HomeRoutes.get('/:id', getHome)
  

module.exports = HomeRoutes