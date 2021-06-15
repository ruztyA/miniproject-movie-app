const { Movie } = require("../models");
const routes = {};
const { Op } = require('sequelize');

/**
 * Showing all movie in database for homepage
 */
routes.showMovie = async (req, res) => {
    try {
      const allMovies = await Movie.findAll();

      res.send({
        statusCode: 200,
        statusText: "success",
        message: "Here you go!",    
        data: allMovies 
      });

    } catch (error) {
      res.status(500).json(error);    
    }
};

/**
 * Search movie by title(judul)
 */
routes.findMovie = async (req, res) => {
    try {      
        let title = req.query.title;
        let condition = title ? {title: { [Op.iLike]: `%${title}%` } } : null;

        const result = await Movie.findAll({
            where: condition
        });

        res.send({
            statusCode: 200,
            statusText: "success",
            message: `Results for ${title} ` ,
            data: result
        });

    } catch (error) {
        res.status(500).json(error);    
    }
}

module.exports = routes;