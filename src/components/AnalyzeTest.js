import React,{useState} from 'react'
import "../assets/css/Analyze.css";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/reducer";
import Skeleton from 'react-loading-skeleton';
import P1 from "../assets/images/P1.png"
import axios from "axios"
function AnalyzeTest() {
	const  {
		imageUploadLoading,
		imageUploadSuccess,
		cloudImage,
		imageAnalyzeLoading,
		imageAnalyzeSuccess,
		analyzeResult,
		showAlert,
		dispatch
	} = useContext(GlobalContext);
	const [showResultSec,setShowResultSec] = useState(false);
	const [result,setResult] = useState({});
	useEffect(() => {
		return () => {
			dispatch({ type: "INIT" });
		};
	}, [dispatch]);
	const uploadImage = async file => {
		// dispatch({ type: "UPLOADING_IMAGE" });
		dispatch({ type: "SET_UPLOAD_LOADING" });

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "dlyu4xhy");
		const { secure_url } = await fetch(
			"https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload",
			{
				method: "POST",
				body: formData,
			}
		).then(res => res.json());
		dispatch({ type: "SET_UPLOADED_IMAGE", payload: secure_url });
		dispatch({ type: "SET_UPLOAD_SUCCESS" });
	};
	const handleInputChange = e => {
		const file = e.target.files[0];
		if (!file) return;
		uploadImage(file);
		// history.push("/analyze");
	};

    const handleAnalyze = () => {
		setShowResultSec(true)
		dispatch({ type: "SET_ANALYZE_LOADING" });
		axios(`https://94e393844041.ngrok.io`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: { url: cloudImage },
		})
		.then(res => {
			// var sum = (672+1802);
			// var whtCent = (parseInt(672/sum)*100)
			var sum = parseInt(res.data.wht)+parseInt(parseInt(res.data.blck.slice(0,4)))
			var whtCent = (parseInt(res.data.wht)/sum)*100
			console.log(sum)
			console.log(whtCent)
			// console.log(parseInt(res.data.blck.slice(0,4)))
			dispatch({ type: "SET_IMAGE_RESULT", payload: res.data });
			// setResult({
			// 	"img2": res.data.img2,
			// 	"img3": res.data.img3,
			// 	"img4": res.data.img4,
			// 	"wht": whtCent,
			// 	"blck": res.data.blck
			// })
			dispatch({ type: "SET_IMAGE_RESULT", payload: res.data });
			dispatch({ type: "SET_ANALYZE_SUCCESS" });
			// var whtCent = (672/(672+180201)*100).toFixed(2)
			// setResult({
			// 	"img2": "https://mantrap.s3-us-west-1.amazonaws.com/43529386-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"img3": "https://mantrap.s3-us-west-1.amazonaws.com/435294ee-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"img4": "https://mantrap.s3-us-west-1.amazonaws.com/435295ac-9320-11eb-a5b1-0242ac1c0002.png",
			// 	"wht": whtCent,
			// 	"blck": "180201"
			// })
		})
		.catch(err => {
			setShowResultSec(false)
			console.log(err)
			alert('Currently we have closed the machine learning API, due to limited amount of GPU EC2 instance Avilability,we are saving it for the Demo day.')
			dispatch({ type: "SHOW_ALERT" });

		})
	};

    return (
        <div>
        <div>
			<Navbar />
			<div className='originalImageSec'>
				{cloudImage !== null && imageUploadSuccess ===true && (<img
					className='areaImg'
					src={cloudImage}
					alt='original image'
				/>)}
				{cloudImage === null && imageUploadLoading === false && (
					<img
					className='areaImg'
					src={P1}
					alt='original image'
				/>
				) }
				{imageUploadLoading && <Skeleton width={400} height={300} color="#202020" highlightColor="#444" /> }
				{imageUploadSuccess && cloudImage !=null ? (
                    <div className="analzeSec">
					<div className='upload-btn-wrapper' onClick={imageUploadSuccess?handleAnalyze:''}>
						<button class="btn">Analyze
						{imageAnalyzeLoading && <div class="spinner-border spinner-spc" role="status">
							<span class="sr-only">Loading...</span>
						</div>}
						</button>
					</div>
				</div>
                ):(
                    <div className="analzeSec">
					<div className='upload-btn-wrapper'>
						<button class="btn">Upload a file
						{imageUploadLoading && <div class="spinner-border spinner-spc" role="status">
							<span class="sr-only">Loading...</span>	
						</div>}
						</button>
						<input type="file" name="myfile" onChange={handleInputChange} />
					</div>
				</div>
                )}
                
			</div>
			{showResultSec && (
				<div className='col resultImageSec'>
				<div className='areaResultTitle'>Result</div>
				<div className="container m-0 p-0">
					{imageAnalyzeSuccess ? (
						<div className="row m-0 p-0">
						<div className="col-12 resultContainer">
							<span className="resultLabel">Output : Our Forged App analyzed the image and predicted that <b>{analyzeResult.wht}%</b> of the region is morphed(edited) which is shown in white region.</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={analyzeResult.img2}
								alt=''
							/>
							<span className="resultLabel">Original Image (App Input)</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={analyzeResult.img3}
								alt=''
							/>
							<span className="resultLabel">Predicted Mask(App Output)</span>

						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={analyzeResult.img4}
								alt=''
							/>
							<span className="resultLabel">Highlighted Forged Region</span>
						</div>
					</div>
					):(
					<Skeleton width={700} height={300} color="#202020" highlightColor="#444" />
					)}
				</div>
			</div>
			) }
		</div>
        </div>
    )
}

export default AnalyzeTest