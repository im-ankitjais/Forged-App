import React,{useState,useEffect,useContext} from 'react'
import { GlobalContext } from "./../context/reducer";
import {useHistory} from "react-router-dom"
import Loader from "./Loader"

const Preview = ({ match }) => {
	console.log(match);
	const history = useHistory();
	const { dispatch } = useContext(GlobalContext);
	const twitterId = match.params.id;
	const [link,setLink] = useState('');
	useEffect(() => {
		
		dispatch({ type: "SET_UPLOAD_LOADING" });
		setLink(`https://pbs.twimg.com/media/${twitterId}.jpg?format=jpg&name=orig`)
	},[twitterId])
	useEffect(() => {
		if(link !=''){
			dispatch({ type: "SET_UPLOAD_LOADING" });
			dispatch({ type: "SET_UPLOADED_IMAGE", payload: link });
			dispatch({ type: "SET_UPLOAD_SUCCESS" });
			history.push("/analyze")
		}
	}, [link])
	console.log(link)
	// https://pbs.twimg.com/media/EvKJZMFVoAUL7fA.jpg?format=jpg&name=orig
	return (
		<div style={{minWidth:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
			<Loader />
		</div>
	)
};

export default Preview;
