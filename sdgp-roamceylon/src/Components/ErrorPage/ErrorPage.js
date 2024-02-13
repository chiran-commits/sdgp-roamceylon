import React from "react";
import HomePage from "../HomePage/HomePage"
import "./ErrorPage.css"

export default function ErrorPage(){
    return(
        <>
        <h1>Error!</h1>
        <div className="subFrame">
            <h2>The page you are looking for doesn't exist</h2>
        </div>
        <a href = "/" className="button">Go back to Home Page</a>
        </>
    )
}