const Review = require('../database/reviewModel');
//fuction is used to save new review to the database

const addReview = async (req, res) => {
    console.log(req.body);
    const { name, location, review, rating } = req.body
    
    console.log(name)

    const user = Review.create({ name, location, review, rating })
    return res.json(user)

}

//function is used to filter review based on the location  send the review to the frontend
const sendReview = async (req, res) => {

    try {
        const location = req.query.location;
        console.log(location);
        //finds the review based on the location
        const reviews = await Review.find({ location: location });
        console.log(reviews);
        res.json(reviews)
    }
    catch (error) {
        console.log(error)
        return res.status(400).json(error)

    }
}

module.exports = { addReview, sendReview }