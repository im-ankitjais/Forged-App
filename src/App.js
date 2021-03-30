import { Route } from "react-router-dom";
import GlobalContextProvider from "./context/reducer";

import "./App.css";
import Home from "./components/Home";
import Analyze from "./components/Analyze";
function App() {
	return (
		<div className='App'>
			<GlobalContextProvider>
				<Route exact path='/' component={Home} />
				<Route path='/analyze' component={Analyze} />
			</GlobalContextProvider>
		</div>
	);
}

export default App;
