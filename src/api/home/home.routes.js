const HomeRoutes = require('express').Router()
 
const { getAllHomes, getHome } = require('./home.controller')


HomeRoutes.get('/', getAllHomes)
 
  

module.exports = HomeRoutes