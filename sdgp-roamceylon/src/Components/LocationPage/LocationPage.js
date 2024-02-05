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
                        <div className = "textbox">
                            <input type = "text" placeholder = "Search the location"/>
                        </div>
                        <button type = "submit">Search Location</button>
                    </div>
                    <div className="rightContainer">
                        <h2><center>Provide Recommandation</center></h2>
                        <div className = "textbox">
                            <input type = "text" placeholder = "Provide a description of your preferred place"/>
                        </div>
                        <button type = "submit">Find your Location</button>
                    </div>
                </div>
            </div>
        </div>
    );
}