const Sailboat = require('./sailboat.model')
const { setError } = require('../../utils/error/error')
 


 

const getAllSailboats = async (req, res, next) => {
    try {
        const sailboatsDB = await Sailboat.find()
        res.status(200).json(sailboatsDB)
    } catch (error) {
        return next(setError(500, 'sailboat failed server'))
    }
}

const getSailboat = async (req, res, next) => {
    try {
        const { id } = req.params
        const sailboatDB = await Sailboat.findById(id)
        if (!sailboatDB) {
            return next(setError(404, 'sailboat not found'))
        }
        return res.status(200).json(sailboatDB)
    } catch (error) {
        return next(setError(500, 'sailboat server error'))
    }
}
 
module.exports = {
   
    getAllSailboats,
    getSailboat,
 
}