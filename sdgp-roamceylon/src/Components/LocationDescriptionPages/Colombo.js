import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import './colombo.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import LocationData from './locations.json'

const Colombo = () => {

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const location = "galle"
    const name = "tharuka"
    const [publisedReviews, setPublisedReviews] = useState([]);

    const [pressedSubmit, setPressedSubmit] = useState(false);



    const handleReviewChange = (e) => {
        setReview(e.target.value);
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




    return (
        <div className='colombopage'>
            <Navbar></Navbar>

            <section className="colombopagehero">
                <div className="colombopagetext-container">
                    <h2>Colombo</h2>
                    {
                        LocationData.map(data => {
                            if (data.location == "Colombo") {
                                return (
                                    <div className="colombopageindicators">
                                        <p>WEATHER: Tropical</p>
                                        <p>WIFI:</p>
                                        <span>
                                            <div className='weather'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div id='number'>
                                                            Fast
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                        <defs>
                                                            <linearGradient id="GradientColor">
                                                            <stop offset="0%" stop-color="#e91e63" />
                                                            <stop offset="100%" stop-color="#673ab7" />
                                                            </linearGradient>
                                                        </defs>
                                                        <circle cx="80" cy="80" r="29" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </span>
                                        <p>COST OF LIVING:</p>
                                        <span>
                                            <div className='cost'>
                                                <div className='outer'>
                                                    <div className='inner'>
                                                        <div id='number'>
                                                            High
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                        <defs>
                                                            <linearGradient id="GradientColor">
                                                            <stop offset="0%" stop-color="#e91e63" />
                                                            <stop offset="100%" stop-color="#673ab7" />
                                                            </linearGradient>
                                                        </defs>
                                                        <circle cx="80" cy="80" r="29" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </span>
                                        <p>URBAN/RURAL: {data.type}</p>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div>

                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Review:
                                    <textarea
                                        value={review}
                                        onChange={handleReviewChange}
                                        required
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
                </div>
            </section>
            <section className="colombopagereviews">
                <h3>REVIEWS</h3>
                <div className="colombopagereview">
                    <h2>Jake</h2>
                    <ul className="comments-list">
                        {publisedReviews.map((comment) => (
                            <li key={comment._id} className="comment-item">
                                <h3>{comment.name}</h3>
                                <p>{comment.review}</p>
                                <div class="rating">
                                    <input  name={`rating${comment._id}`} id={`${comment._id}5`} type="radio" checked={comment.rating== 5}  />
                                    <label for={`${comment._id}5`}></label>
                                    <input  name={`rating${comment._id}`} id={`${comment._id}4`} type="radio" checked={comment.rating== 4} />
                                    <label for={`${comment._id}4`}></label>
                                    <input  name={`rating${comment._id}`} id={`${comment._id}3`} type="radio" checked={comment.rating== 3}  />
                                    <label for={`${comment._id}3`}></label>
                                    <input  name={`rating${comment._id}`} id={`${comment._id}2`} type="radio" checked={comment.rating==2} />
                                    <label for={`${comment._id}2`}></label>
                                    <input name={`rating${comment._id}`} id={`${comment._id}1`} type="radio" checked={comment.rating==1} />
                                    <label for={`${comment._id}1`}></label>
                                </div>
                                <p>{comment.rating}</p>

                            </li>
                        ))}
                    </ul>


                </div>
            </section>



        </div>
    )
}

export default Colombo


