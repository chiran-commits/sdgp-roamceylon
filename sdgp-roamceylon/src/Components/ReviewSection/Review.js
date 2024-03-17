import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './Review.css';
import Loader from "../Helper/loader"

const Review = (details) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const location = details.location;
    const name = "tharuka"
    const [publisedReviews, setPublisedReviews] = useState([]);

    const [pressedSubmit, setPressedSubmit] = useState(false);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        await axios.post('http://localhost:5009/review', { name, location, review, rating }).catch((err) => {
            console.log(err)
            setReview('');
            setRating(0);
        })
        setPressedSubmit(!pressedSubmit);
        setReview('');
        setRating(0);
    };


    useEffect(() => {
        const getReviwes = async () => {
            try {
                let publisedReviews = await axios.get(`http://localhost:5009/review?location=${location}`, { location }).catch(
                    console.log("error fetching data")
                )
               

                console.log(publisedReviews.data)
                let publishedReviewsArray = Object.values(publisedReviews.data);
                setPublisedReviews(publishedReviewsArray);

            }
            catch (err) {
                console.log(err)
            }





        }
        getReviwes()

    }, [pressedSubmit])

    return (



        <section className="colombopagereviews">

        {!publisedReviews.length ? <Loader/> : (


       
            

            <div className="colombopagereview">
                
                
                <h3 className='review-heading'>Reviews</h3>

                <ul className="comments-list">
                    {publisedReviews.map((comment) => (
                        <li key={comment._id} className="comment-item">
                            <p className='username'>{comment.name}</p>
                            <p>{comment.review}</p>
                            <div class="rating">
                                <input name={`rating${comment._id}`} id={`${comment._id}5`} type="radio" checked={comment.rating == 5} />
                                <label for={`${comment._id}5`}></label>
                                <input name={`rating${comment._id}`} id={`${comment._id}4`} type="radio" checked={comment.rating == 4} />
                                <label for={`${comment._id}4`}></label>
                                <input name={`rating${comment._id}`} id={`${comment._id}3`} type="radio" checked={comment.rating == 3} />
                                <label for={`${comment._id}3`}></label>
                                <input name={`rating${comment._id}`} id={`${comment._id}2`} type="radio" checked={comment.rating == 2} />
                                <label for={`${comment._id}2`}></label>
                                <input name={`rating${comment._id}`} id={`${comment._id}1`} type="radio" checked={comment.rating == 1} />
                                <label for={`${comment._id}1`}></label>
                            </div>

                        </li>
                    ))}
                </ul>

            </div>
         )}

            <h3 className='review-heading'>See what other Digital Nomads have to say!</h3>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Review:
                            <textarea className='review-text-area'
                                value={review}
                                onChange={handleReviewChange}
                                required
                                placeholder='Enter your Review here...'
                            />
                        </label>
                    </div>
                    <div>

                        <label>
                            Rating:


                        </label>
                        <div class="rating">
                            <input value="5" name="rating" id="star5" type="radio" checked={rating === 5} onChange={handleRatingChange} />
                            <label for="star5"></label>
                            <input value="4" name="rating" id="star4" type="radio" checked={rating === 4} onChange={handleRatingChange} />
                            <label for="star4"></label>
                            <input value="3" name="rating" id="star3" type="radio" checked={rating === 3} onChange={handleRatingChange} />
                            <label for="star3"></label>
                            <input value="2" name="rating" id="star2" type="radio" checked={rating === 2} onChange={handleRatingChange} />
                            <label for="star2"></label>
                            <input value="1" name="rating" id="star1" type="radio" checked={rating === 1} onChange={handleRatingChange} />
                            <label for="star1"></label>
                        </div>

                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        </section>

    )
}

export default Review