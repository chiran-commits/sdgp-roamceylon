import Navbar from "../AboutUsPage/Navbar";
import "./LocationPage.css";

export default function LocationPage(){
    return(
        <div>
            <Navbar/>
            <div className="mainContainer">
                <div className="container">
                    <div className="leftContainer">
                        <h2><center>Manual Search</center></h2>
                    </div>
                    
                    <div className="rightContainer">
                        <h2><center>Provide Recommandation</center></h2>
                    </div> 
                </div>
            </div>
        </div>
    );
}