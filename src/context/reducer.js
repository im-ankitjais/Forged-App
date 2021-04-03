import { useReducer, createContext } from "react";
export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const INITIAL_STATE = {
		imageUploadLoading:false,
		imageUploadSuccess:false,
		cloudImage: null,
		imageAnalyzeLoading:false,
		imageAnalyzeSuccess:false,
		analyzeResult: null,
		showAlert: false,
	};

	const Reducer = (state, action) => {
		switch (action.type) {
			case "SET_UPLOAD_LOADING":
				return { ...state, imageUploadLoading: true, imageUploadSuccess:false };
			case "SET_UPLOAD_SUCCESS":
				return { ...state, imageUploadLoading: false, imageUploadSuccess:true };
			case "SET_ANALYZE_LOADING":
				return { ...state, imageAnalyzeLoading: true, imageAnalyzeSuccess:false };
			case "SET_ANALYZE_SUCCESS":
				return { ...state, imageAnalyzeLoading: false, imageAnalyzeSuccess:true };
			case "SET_UPLOADED_IMAGE":
				return {
					...state,
					cloudImage: action.payload,
				};
			case "SET_IMAGE_RESULT":
				return {
					...state,
					result: action.payload,
				};
			case "SHOW_ALERT":
				return { ...state, showAlert: !state.showAlert,imageUploadLoading:false,imageAnalyzeLoading:false,imageAnalyzeSuccess:true };
			case "INIT":
				return {
					...state,
					imageUploadLoading:false,
					imageUploadSuccess:false,
					cloudImage: null,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	return (
		<GlobalContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
