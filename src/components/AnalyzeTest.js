import React,{useState} from 'react'
import "../assets/css/Analyze.css";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/reducer";
import Skeleton from 'react-loading-skeleton';
import Upload from "../assets/images/upload.png"
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
	};

    const handleAnalyze = () => {
		setShowResultSec(true)
		dispatch({ type: "SET_ANALYZE_LOADING" });
		axios(`${process.env.REACT_APP_ANALYZE_API}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: { url: cloudImage },
		})
		.then(res => {
			var white=parseInt(res.data.wht)
			var black=parseInt(res.data.blck)
			var sum=white+black
			var cent=((white/sum)*100).toFixed(3)
			setResult({
				"img2": res.data.img2,
				"img3": res.data.img3,
				"img4": res.data.img4,
				"wht": res.data.wht,
				"blck": res.data.blck,
				manipulatedCent:cent
			})
			dispatch({ type: "SET_ANALYZE_SUCCESS" });
			dispatch({ type: "INIT" });
		})
		.catch(err => {
			setShowResultSec(false)
			console.log(err)
			alert('Currently we have closed the machine learning API, due to limited amount of GPU EC2 instance avilability. We are saving it for the Demo day.')
			dispatch({ type: "SHOW_ALERT" });
		})
	};
	console.log(analyzeResult)
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
					src={Upload}
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
				<div className="container centerDiv m-0 p-0">
					{imageAnalyzeSuccess ? (
						<div className="row m-0 p-0">
						<div className="col-12 resultContainer">
							<span className="resultLabel">Output : Our Forged App analyzed the image and predicted that <b>{result?.manipulatedCent}%</b> of the region is morphed(edited) which is shown in white region.</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result?.img2}
								alt=''
							/>
							<span className="resultLabel">Original Image (App Input)</span>
						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result?.img3}
								alt=''
							/>
							<span className="resultLabel">Predicted Mask(App Output)</span>

						</div>
						<div className="col-12 col-md-4 m-0 p-0 resultContainer">
							<img
								className='areaResult'
								src={result?.img4}
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