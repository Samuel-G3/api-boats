const Home = require('./home.model')
const { setError } = require('../../utils/error/error')
 


 

const getAllHomes = async (req, res, next) => {
    try {
        const homesDB = await Home.find()
        res.status(200).json(homesDB)
    } catch (error) {
        return next(setError(500, '  failed server'))
    }
}

const getHome = async (req, res, next) => {
    try {
        const { id } = req.params
        const homeDB = await Home.findById(id)
        if (!homeDB) {
            return next(setError(404, '  not found'))
        }
        return res.status(200).json(homeDB)
    } catch (error) {
        return next(setError(500, '  server error'))
    }
}
 
module.exports = {
   
    getAllHomes,
    getHome,
 
}