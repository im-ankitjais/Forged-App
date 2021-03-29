import React from 'react'
import "../assets/css/Analyze.css"
import Navbar from "./Navbar"

function Analyze() {
    return (
        <div>
            <Navbar />
            <div className="col originalImageSec">
                    <img className="areaImg" src="https://res.cloudinary.com/dhqp2dd6b/image/upload/v1617005792/image-processing/rbapfgdji4um4gzxv3ly.gif" alt=""/>
                    <div className="areaButton">Analyze</div>
            </div>
            <div className="col resultImageSec">
                <div className="areaResultTitle">Result</div>
                <img className="areaResult" src="https://res.cloudinary.com/dhqp2dd6b/image/upload/v1617005792/image-processing/rbapfgdji4um4gzxv3ly.gif" alt=""/>
            </div>
        </div>
    )
}

export default Analyze
