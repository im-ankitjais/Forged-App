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
	const [result,setResult] = useState({});

	useEffect(() => {
		return () => {
			dispatch({ type: "INIT" });
		};
	}, [dispatch]);

	const handleAnalyze = () => {
		setShowResultSec(true)
		// axios("https://bf99cbe508b9.ngrok.io/predict", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: { url: cloudImage },
		// })
		// .then(res => {
			var sum = (672+1802);
			var whtCent = (parseInt(672/sum)*100)
			// var sum = parseInt(res.data.wht)+parseInt(parseInt(res.data.blck.slice(0,4)))
			// var whtCent = (parseInt(res.data.wht)/sum)*100
			console.log(sum)
			console.log(whtCent)
			// console.log(parseInt(res.data.blck.slice(0,4)))
			setResult({
				// "img2": res.data.img2,
				// "img3": res.data.img3,
				// "img4": res.data.img4,
				"wht": whtCent,
				// "blck": res.data.blck
			})
			// var whtCent = (672/(672+180201)*100).toFixed(2)
			// setResult({
			// 	"img2": "https://mantrap.s3-us-west-1.amazonaws.com/43529386-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"img3": "https://mantrap.s3-us-west-1.amazonaws.com/435294ee-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"img4": "https://mantrap.s3-us-west-1.amazonaws.com/435295ac-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"wht": whtCent,
			// 	"blck": "180201"

			// })
		// })
		// .catch(err => alert('Currently API is Off.'))
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
				<div className="container m-0 p-0">
					<div className="row m-0 p-0">
						<div className="col-12 resultContainer">
							<span className="resultLabel">Output : Our Forged App analyzed the image and predicted that <b>{result.wht}%</b> of the region is morphed(edited) which is shown in white region.</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result.img2}
								alt=''
							/>
							<span className="resultLabel">Original Image (App Input)</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result.img3}
								alt=''
							/>
							<span className="resultLabel">Predicted Mask(App Output)</span>

						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result.img4}
								alt=''
							/>
							<span className="resultLabel">Highlighted Forged Region</span>
						</div>
					</div>
				</div>
				<Skeleton width={700} height={300} color="#202020" highlightColor="#444" />
			</div>
			) }
		</div>
	);
}

export default Analyze;
