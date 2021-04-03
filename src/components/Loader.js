import React from 'react'
import LoaderIcon from "../assets/images/loader.png"
import "../assets/css/article.css"
function Loader() {
    return (
        <>
            <img className="loaderImg" src={LoaderIcon} alt="loading"/>
        </>
    )
}

export default Loader
