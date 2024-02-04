import Navbar from "../AboutUsPage/Navbar";

export default function LocationPage(){
    return(
        <>
        <div className = "outer-layer">
            <div className = "middle-layer">
                <Navbar/>
                <div className = "inner-layer">
                    <div className = "Manual-search">
                        <h1>Manual Search</h1>
                        <input type = "text" placeholder = "Enter location name"/>
                    </div>
                    <div className = "Recommendation">
                        <h1>Receive Recommendations</h1>
                        <input type = "text" placeholder = "Enter a description of your preferred locations"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}