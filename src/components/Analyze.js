import React,{useState} from 'react'
import "../assets/css/Analyze.css";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/reducer";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
function Analyze() {
	const { cloudImage, dispatch } = useContext(GlobalContext);
	const [showResultSec,setShowResultSec] = useState(false);
	useEffect(() => {
		return () => {
			dispatch({ type: "INIT" });
		};
	}, [dispatch]);

	const handleAnalyze = () => {
		setShowResultSec(true)
		axios("https://fcfd57e81fbd.ngrok.io/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: { url: cloudImage },
		})
		.then(res => console.log(res))
		.catch(err => alert('Currently API is Off.'))
	};

	return (
		<div>
			<Navbar />
			<div className='originalImageSec'>
				{cloudImage && <img
					className='areaImg'
					src={cloudImage}
					alt='original image'
				/>}
				{!cloudImage && <Skeleton width={400} height={300} color="#202020" highlightColor="#444" />}
				<div className="analzeSec">
					<div className={cloudImage?'areaButton activeAnal':'areaButton nonActiveAnal'}onClick={cloudImage?handleAnalyze:''}>
						Analyze
						{!cloudImage && <div class="spinner-border p-0 m-0" role="status">
							<span class="sr-only">Loading...</span>
						</div>}
					</div>
				</div>
			</div>
			{showResultSec && (
				<div className='col resultImageSec'>
				<div className='areaResultTitle'>Result</div>
				{/* <img
					className='areaResult'
					src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1617005792/image-processing/rbapfgdji4um4gzxv3ly.gif'
					alt=''
				/> */}
				<Skeleton width={400} height={300} color="#202020" highlightColor="#444" />
			</div>
			) }
		</div>
	);
}

export default Analyze;
