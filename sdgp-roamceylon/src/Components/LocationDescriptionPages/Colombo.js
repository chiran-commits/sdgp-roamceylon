import React from 'react'
import Navbar from '../AboutUsPage/Navbar';
import './colombo.css';

const Colombo = () => {
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