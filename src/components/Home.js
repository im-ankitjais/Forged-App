import React, { useEffect,useContext, useRef } from "react";
import "../assets/css/Home.css";
import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";
import sample1 from "../assets/images/sample-1.png";
import sample2 from "../assets/images/sample-2.jpg";
import sample3 from "../assets/images/sample-3.jpg";
import Uploader from "../cloudinary";
import { GlobalContext } from "./../context/reducer";

function Home() {
	// const samples = [sample1,sample2,sample3];
	const samples = [
		"http://res.cloudinary.com/dhqp2dd6b/image/upload/v1617527808/image-processing/smrduxqlgbsnf7appweu.png",
		"http://res.cloudinary.com/dhqp2dd6b/image/upload/v1617527871/image-processing/rbaz6jquy0nnl12j4ckc.jpg",
		"http://res.cloudinary.com/dhqp2dd6b/image/upload/v1617527899/image-processing/gt6rc2lk0cgtn4bh9tjt.jpg"
	];
	const { dispatch } = useContext(GlobalContext);
	const history = useHistory();

	const scrollToEl = useRef();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Navbar />
			<div class='index-container'>
				<div class='p-0 m-0'>
					<div class='row p-0 m-0'>
						<div class='col-12 col-lg-6 p-3 m-0'>
							<div class='text-left dis'>
								<h1 class='index-header mb-4' data-aos='fade-down'>
									Unmask Forgery,
									<br />
									Unmask Cyber Crimes
								</h1>
								<p
									class='index-subheader mb-5'
									data-aos='fade-down'
									data-aos-delay='300'>
									(DEMO )Create shorted links, unique biolink pages and get
									proper statistics of your visitors.
								</p>

								<div data-aos='fade-down' data-aos-delay='500'>
									<Link to='/analyze' class='index-button'>
										Upload Image ⚡️
									</Link>
								</div>
								<p
									style={{
										marginTop: "2rem",
										cursor: "pointer",
										fontWeight: "bold",
									}}
									onClick={() =>
										scrollToEl.current.scrollIntoView({ behavior: "smooth" })
									}>
									Or <u>Test with Sample Images</u>
								</p>
							</div>
						</div>

						<div class='col-12 col-lg-6 p-0 m-0'>
							<iframe
								class='iframe-bot'
								src='https://my.spline.design/3dbot-ccba3cc9203c36c039d292d4d338ef2f/'
								frameborder='0'></iframe>
						</div>
					</div>
				</div>
			</div>
			<div className="sec2">
			<div class='container'>
				<div class='row'>
					<div class='col-md-6 d-flex align-items-center'>
						<div>
							<span class='fa-stack fa-2x'>
								<svg
									width='62'
									height='62'
									viewBox='0 0 62 62'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0H41C52.598 0 62 9.40202 62 21V62H21C9.40202 62 0 52.598 0 41V0Z'
										fill='#27AE60'
									/>
									<path
										d='M17.7143 38.75V44.2857H23.25L39.5767 27.9591L34.041 22.4233L17.7143 38.75ZM43.8576 23.6781C43.9945 23.5415 44.103 23.3793 44.1771 23.2007C44.2512 23.0222 44.2893 22.8307 44.2893 22.6374C44.2893 22.4441 44.2512 22.2526 44.1771 22.074C44.103 21.8955 43.9945 21.7332 43.8576 21.5967L40.4033 18.1424C40.2668 18.0055 40.1046 17.897 39.926 17.8229C39.7474 17.7488 39.556 17.7107 39.3626 17.7107C39.1693 17.7107 38.9779 17.7488 38.7993 17.8229C38.6207 17.897 38.4585 18.0055 38.3219 18.1424L35.6205 20.8438L41.1562 26.3795L43.8576 23.6781Z'
										fill='white'
									/>
								</svg>
							</span>

							<h2 class='mt-3'>
								Be aware of the forged images
								<br />
								<u>in seconds</u>
							</h2>

							<p class='mt-3'>
								You can verify the morphed images by just uploading it on our
								website or on our app.
							</p>
						</div>
					</div>
					<div class='col-md-6'>
						<img src={P1} class='img-fluid' />
					</div>
				</div>
			</div>

			<div class='container margin-top-9'>
				<div class='row'>
					<div class='col-md-6'>
						<img src={P2} class='img-fluid' />
					</div>
					<div class='col-md-6 d-flex align-items-center'>
						<div>
							<span class='fa-stack fa-2x'>
								<svg
									width='62'
									height='62'
									viewBox='0 0 62 62'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0H41C52.598 0 62 9.40202 62 21V62H21C9.40202 62 0 52.598 0 41V0Z'
										fill='#EB5757'
									/>
									<path
										d='M49 34.9C49 35.8 47.2 36.4 45.1 36.7C43.75 34.15 41.05 32.2 37.9 30.85C38.2 30.4 38.5 30.1 38.8 29.65H40C44.65 29.5 49 32.35 49 34.9ZM23.2 29.5H22C17.35 29.5 13 32.35 13 34.9C13 35.8 14.8 36.4 16.9 36.7C18.25 34.15 20.95 32.2 24.1 30.85L23.2 29.5ZM31 31C34.3 31 37 28.3 37 25C37 21.7 34.3 19 31 19C27.7 19 25 21.7 25 25C25 28.3 27.7 31 31 31ZM31 32.5C24.85 32.5 19 36.4 19 40C19 43 31 43 31 43C31 43 43 43 43 40C43 36.4 37.15 32.5 31 32.5ZM39.55 28H40C42.55 28 44.5 26.05 44.5 23.5C44.5 20.95 42.55 19 40 19C39.25 19 38.65 19.15 38.05 19.45C39.25 20.95 40 22.9 40 25C40 26.05 39.85 27.1 39.55 28ZM22 28H22.45C22.15 27.1 22 26.05 22 25C22 22.9 22.75 20.95 23.95 19.45C23.35 19.15 22.75 19 22 19C19.45 19 17.5 20.95 17.5 23.5C17.5 26.05 19.45 28 22 28Z'
										fill='white'
									/>
								</svg>
							</span>

							<h2 class='mt-3'>
								You can reach to us through different platforms
							</h2>

							<p class='mt-3'>
								You can find us at on our website , app and twitter
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class='container margin-top-9'>
				<div class='row'>
					<div class='col-md-6 d-flex align-items-center'>
						<div>
							<span class='fa-stack fa-2x'>
								<svg
									width='62'
									height='62'
									viewBox='0 0 62 62'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0H41C52.598 0 62 9.40202 62 21V62H21C9.40202 62 0 52.598 0 41V0Z'
										fill='#0189FF'
									/>
									<g clip-path='url(#clip0)'>
										<path
											d='M35.137 26.8623C38.6378 30.3667 38.5897 35.9852 35.1581 39.4359C35.1516 39.4429 35.144 39.4506 35.137 39.4576L31.1995 43.3951C27.7266 46.8679 22.0765 46.8675 18.6042 43.3951C15.1313 39.9228 15.1313 34.272 18.6042 30.7998L20.7783 28.6256C21.3549 28.049 22.3478 28.4322 22.3776 29.247C22.4156 30.2854 22.6018 31.3287 22.9454 32.3362C23.0617 32.6773 22.9786 33.0546 22.7237 33.3095L21.9569 34.0763C20.3147 35.7185 20.2632 38.3924 21.8892 40.0506C23.5312 41.7251 26.2302 41.7351 27.8848 40.0804L31.8223 36.1435C33.4741 34.4917 33.4672 31.8218 31.8223 30.1769C31.6055 29.9605 31.387 29.7923 31.2164 29.6748C31.0957 29.5919 30.996 29.482 30.9254 29.3538C30.8547 29.2255 30.815 29.0825 30.8093 28.9362C30.7861 28.317 31.0055 27.679 31.4948 27.1898L32.7284 25.9561C33.0519 25.6326 33.5594 25.5928 33.9345 25.8546C34.3641 26.1546 34.7665 26.4918 35.137 26.8623ZM43.3949 18.604C39.9225 15.1316 34.2724 15.1311 30.7996 18.604L26.8621 22.5415C26.855 22.5485 26.8474 22.5561 26.841 22.5631C23.4094 26.0138 23.3613 31.6323 26.8621 35.1368C27.2325 35.5072 27.6349 35.8444 28.0645 36.1443C28.4396 36.4061 28.9471 36.3664 29.2706 36.0429L30.5042 34.8092C30.9934 34.32 31.2128 33.6819 31.1896 33.0628C31.184 32.9165 31.1443 32.7735 31.0736 32.6452C31.0029 32.517 30.9033 32.407 30.7826 32.3242C30.6119 32.2067 30.3935 32.0385 30.1767 31.8221C28.5317 30.1772 28.5248 27.5073 30.1767 25.8555L34.1142 21.9186C35.7688 20.2639 38.4677 20.2739 40.1098 21.9484C41.7357 23.6066 41.6843 26.2805 40.0421 27.9227L39.2753 28.6895C39.0204 28.9444 38.9372 29.3217 39.0536 29.6628C39.3972 30.6703 39.5834 31.7135 39.6214 32.7519C39.6512 33.5667 40.6441 33.95 41.2206 33.3734L43.3948 31.1992C46.8677 27.727 46.8677 22.0762 43.3949 18.604Z'
											fill='white'
										/>
									</g>
									<defs>
										<clipPath id='clip0'>
											<rect
												width='30'
												height='30'
												fill='white'
												transform='translate(16 16)'
											/>
										</clipPath>
									</defs>
								</svg>
							</span>

							<h2 class='mt-3'>Easy results on our Twitter Bot</h2>

							<p class='mt-3'>
								You can tag our platform on twitter and get immediate results
							</p>
						</div>
					</div>
					<div class='col-md-6'>
						<img src={P3} class='img-fluid' />
					</div>
				</div>
			</div>

			<div class='container margin-top-9'>
				<div class='row'>
					<div class='col-md-6'>
						<img src={P4} class='img-fluid' />
					</div>
					<div class='col-md-6 d-flex align-items-center'>
						<div>
							<span class='fa-stack fa-2x'>
								<svg
									width='62'
									height='62'
									viewBox='0 0 62 62'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0H41C52.598 0 62 9.40202 62 21V62H21C9.40202 62 0 52.598 0 41V0Z'
										fill='#FD9F63'
									/>
									<path
										d='M16 22C16 19.7425 17.17 17.38 19 16C19 17.2675 20.035 19 22 19C23.1935 19 24.3381 19.4741 25.182 20.318C26.0259 21.1619 26.5 22.3065 26.5 23.5C26.5 24.079 26.38 24.628 26.182 25.135C27.292 26.026 28.396 26.92 29.467 27.85L26.35 30.97C25.4264 29.8907 24.5228 28.7945 23.6395 27.682C23.1295 27.88 22.5805 28 22 28C18.685 28 16 25.315 16 22ZM34.228 32.272L36.238 30.262C37.1705 30.7402 38.2021 30.993 39.25 31C41.0402 31 42.7571 30.2888 44.023 29.023C45.2888 27.7571 46 26.0402 46 24.25C46 23.1625 45.718 22.15 45.2605 21.2395L40 26.5L37 23.5L42.2605 18.2395C41.3289 17.7602 40.2976 17.5068 39.25 17.5C37.4598 17.5 35.7429 18.2112 34.477 19.477C33.2112 20.7429 32.5 22.4598 32.5 24.25C32.5 25.3375 32.782 26.35 33.2395 27.2605L17.5 43L20.5 46L30.772 35.728C33.5974 38.6266 36.5911 41.3564 39.7375 43.903L41.875 45.625L44.125 43.375L42.4 41.2375C39.8552 38.0904 37.1265 35.0967 34.228 32.272Z'
										fill='white'
									/>
								</svg>
							</span>

							<h2 class='mt-3'>Be updated about the recent forgery.</h2>

							<p class='mt-3'>
								You can get the latest news about forgery on our news section
							</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className='col-12 sample-image-container' ref={scrollToEl}>
				<h3 style={{textTransform:'capitalize'}}>Choose any sample image to test forged app</h3>
				<div className="container m-0 p-0">
					<div className="row m-0 p-0">
						{samples.map(src => (
					<div className="col-12 col-md-4 m-0 p-3" 
					onClick={() => {
							history.push("/analyze");
							dispatch({ type: "SET_UPLOAD_LOADING" });
							dispatch({
								type: "SET_UPLOADED_IMAGE",
								payload:src,
							});
							dispatch({ type: "SET_UPLOAD_SUCCESS" });
						}}
					>
					<div class="member">
					<img
						src={src}
						className="smapleImages"
					/>
					
					<div class="member-info">
                <div class="member-info-content">
                  <h4>Select</h4>
                </div>
              </div>
			  </div>
					</div>
				))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
