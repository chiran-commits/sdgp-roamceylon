import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import './colombo.css';
import { useState } from 'react'
import axios from 'axios';

const Colombo = () => {

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const location="galle"
    const name="tharuka"
  
    const handleReviewChange = (e) => {
      setReview(e.target.value);
    };
  
    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
      };
  
    const handleSubmit =async (e) => {
        e.preventDefault();

       await axios.post('http://localhost:5009/review',{name,location,review,rating}).catch((err)=>{
            console.log(err)
            setReview('');
            setRating(0);
        })
      setReview('');
      setRating(0);
    };




  return (
    <div className='colombopage'>
        <Navbar></Navbar>
          
        <section className="colombopagehero">
            <div className="colombopagetext-container">
                <h2>Colombo</h2>
                <div className="colombopageindicators">
                    <p>WEATHER: TROPICAL</p>
                    <p>WIFI: AVERAGE</p>
                    <p>COST OF LIVING: LOW-COST</p>
                    <p>URBAN/RURAL: URBAN</p>
                </div>
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
                            <input value="5" name="rating" id="star5" type="radio" checked={rating === 5} onChange={handleRatingChange}/>
                            <label for="star5"></label>
                            <input value="4" name="rating" id="star4" type="radio" checked={rating === 4} onChange={handleRatingChange}/>
                            <label for="star4"></label>
                            <input value="3" name="rating" id="star3" type="radio" checked={rating === 3} onChange={handleRatingChange}/>
                            <label for="star3"></label>
                            <input value="2" name="rating" id="star2" type="radio" checked={rating=== 2} onChange={handleRatingChange}/>
                            <label for="star2"></label>
                            <input value="1" name="rating" id="star1" type="radio" checked={rating === 1} onChange={handleRatingChange}/>
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
                <p>Nunc sit amet condimentum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra efficitur diam eget fringilla. Donec euismod eleifend massa non volutpat. Lorem ipsum do olor sit amet, consectetur adipiscing elit. Duis mattis quis dolor a rhoncus. Sed eros magna, venenatis et urna vitoe, vehicula porttitor nulla.</p>
            </div>
        </section>
   


    </div>
  )
}

export default Colombo





