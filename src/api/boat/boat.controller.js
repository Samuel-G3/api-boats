const Boat = require('./boat.model')
const { setError } = require('../../utils/error/error')
 

 

const getAllBoats = async (req, res, next) => {
    try {
        const boatsDB = await Boat.find() 
        res.status(200).json(boatsDB)
    } catch (error) {
        return next(setError(500, 'Boats failed server'))
    }
}

const getBoat = async (req, res, next) => {
    try {
        const { id } = req.params
        const boatDB = await Boat.find({id}) 
        if (!boatDB) {
            return next(setError(404, 'Boats not found'))
        }
        return res.status(200).json(boatDB)
    } catch (error) {
        return next(setError(500, 'Boats server error'))
    }
}
 

module.exports = {
  
    getAllBoats,
    getBoat,
   
}
