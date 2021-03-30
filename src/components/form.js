import { useHistory } from "react-router-dom";
import { GlobalContext } from "./../context/reducer";
import { useContext } from "react";

const Form = () => {
	const history = useHistory();
	const { dispatch } = useContext(GlobalContext);

	const uploadImage = async file => {
		// dispatch({ type: "UPLOADING_IMAGE" });

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
	};

	const handleInputChange = e => {
		const file = e.target.files[0];
		if (!file) return;

		uploadImage(file);

		history.push("/analyze");
		// router.push("/analyze");
	};

	return (
		<form>
			<label htmlFor='file'>Upload</label>
			<input type='file' id='file' onChange={handleInputChange} />
		</form>
	);
};

export default Form;
