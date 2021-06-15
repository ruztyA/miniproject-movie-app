const { Review, Movie } = require("../models");
const routes = {};
const { Op } = require('sequelize');


/***
 * create review
 * one user_id Can only create one review each movie
 */

routes.createReview = async (req, res) => {
  try{
    const {userId, movieId, review, rating } = req.body
    const search = await Review.findOne({where: {userId: userId, movieId: movieId}})
    if(search){
        res.send({
            status: 404,
            message: "anda sudah review disini"
        })
    }else{
        const review = { ...req.body}
        await Review.create(review)
        res.send({
            statusCode: 200,
            statusText: "success",
            message: " Your request for CREATE Review successfully",
            data: review
        })
    }
  }catch(error){
    res.status(500).json({
        message: error.message,
      });
  }
};


/**
 * Get review movie by movie_id 
 */

 routes.getMovieReview = async (req, res) => {
  try{
      const id = req.params.id
      const AllReviewMovie = await Movie.findAll({include: Review, where: {id: id}})
      res.send({
          statusCode: 200,
          statusText: "success",
          message: " Your request for GET ALL review movie successfully",
          data: AllReviewMovie
        });
  }catch(error) {
      res.status(500).json({
          message: error.message,
        });
    
  }
}

  /**
   * pagination request for page movie reviews. size is adjustable but only up on 10 reviews per page.
   */
  routes.showReviews = async (req, res) => {
    try {
        const getPagination = (page, size) => {
        (size > 10) ? size = 10 : size;
        const limit = size ? +size : 10;
        const offset = page ? page * limit : 0;
    
        return {limit, offset};
        };
    
        const getPagingData = (data, page, limit) => {
        const { count: totalReviews, rows: reviews } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalReviews/limit);
    
        return { totalReviews, reviews, totalPages, currentPage }
        };

        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);

        let result = await Review.findAndCountAll({ limit, offset})
        
        const response = getPagingData(result, page, limit);
        res.send({
          statusCode: 200,
          statusText: "success",
          message: "Showing all reviews for this movie",    
          data: response 
        });
                
    } catch (error) {
      res.status(500).json(error);    
    };
  };

  /**
   * update request. still need to be fix. because it doesn't have authorization (admin still can update)
   */
  routes.updateReview = async(req, res) => {
    try {
        const userId = req.params.id;
        const { movieId, review, rating } = req.body;
        
        const isUserExist = await Review.findOne({
          where: { id: { [Op.eq]: userId } }
        })

        // condition if user didn't exist.
        if(!isUserExist) {
          res.send({
            statusCode: 404,
            statusText: "Failed",
            message: "Members ID undefined",
          });
        }

        let reviewDetails = await Review.findOne({
            where: { id: id, movieId: { [Op.eq]: movieId } }
        });

        // condition if the user didn't reviewed the movie yet.
        if(!reviewDetails) {
          res.send({
            statusCode: 404,
            statusText: "Failed",
            message: "Uh oh, you didn't reviewed this movie yet.",
          });
  
        } else {
            reviewDetails.review = review;

            // condition if user input rating above 10. max rating = 10.
            (rating > 10 && (typeof(rating) == "number")) ? rating = 10 : rating;
            reviewDetails.rating = rating;

            const result = reviewDetails.save();
            
            res.send({
              statusCode: 200,
              statusText: "success",
              message: "Update Review Success!",
              data: result
            });
        };
    } catch (error) {
      res.status(500).json(error);
    };
};

/**
 * delete review by id
 */
routes.deleteReview = async(req, res) => {
  const id = req.params.id
  try{
    Review.destroy({where: {id: id}})
    res.send({
      status: 200,
      statusText: "success delete",
      message: `Review with id : ${id} has been deleted!`,
    })
  }catch(error){
    res.status(500).json(error);
  }
}


module.exports = routes;
