import { Route } from "react-router-dom";
import GlobalContextProvider from "./context/reducer";
import "./App.css";
import Home from "./components/Home";
import Analyze from "./components/AnalyzeTest";
import ArticleList from "./components/ArticleList";
import Blog from "./components/Blog";
import Preview from "./components/preview";

function App() {
	return (
		<div className='App'>
			<GlobalContextProvider>
				<Route exact exact path='/' component={Home} />
				<Route exact path='/analyze' component={Analyze} />
				<Route exact path='/preview/:ids' component={Preview} />
				<Route exact path='/news' component={ArticleList} />
				<Route exact path='/news/:id' component={Blog} />
			</GlobalContextProvider>
		</div>
	);
}

export default App;
