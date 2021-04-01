import { Route } from "react-router-dom";
import GlobalContextProvider from "./context/reducer";
import "./App.css";
import Home from "./components/Home";
import Analyze from "./components/Analyze";
//import ArticleList from "./components/ArticleList"

function App() {
	return (
		<div className='App'>
			<GlobalContextProvider>
				<Route exact path='/' component={Home} />
				<Route path='/analyze' component={Analyze} />
				{/* <Route path='/article' component={ArticleList} /> */}
			</GlobalContextProvider>
		</div>
	);
}

export default App;
