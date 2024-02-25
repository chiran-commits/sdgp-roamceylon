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
                            <input
                            type="number"
                            value={rating}
                            onChange={handleRatingChange}
                            min="1"
                            max="5"
                            required
                            />
                        </label>
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





