import "../assets/css/Analyze.css";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/reducer";
import axios from "axios";

function Analyze() {
	const { cloudImage, dispatch } = useContext(GlobalContext);

	useEffect(() => {
		return () => {
			dispatch({ type: "INIT" });
		};
	}, [dispatch]);

	const handleAnalyze = () => {
		axios("https://fcfd57e81fbd.ngrok.io/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: { url: cloudImage },
		}).then(res => console.log(res));
	};

	return (
		<div>
			<Navbar />
			<div className='col originalImageSec'>
				<img
					className='areaImg'
					src={
						cloudImage ||
						"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1617005792/image-processing/rbapfgdji4um4gzxv3ly.gif"
					}
					alt='original image'
				/>
			</div>
			<div className='areaButton' onClick={handleAnalyze}>
				Analyze
			</div>
			<div className='col resultImageSec'>
				<div className='areaResultTitle'>Result</div>
				<img
					className='areaResult'
					src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1617005792/image-processing/rbapfgdji4um4gzxv3ly.gif'
					alt=''
				/>
			</div>
		</div>
	);
}

export default Analyze;
