import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RC from './Pages/RC';
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route
						exact path="/"
						component = {Home}
					/>
					<Route 
						exact path="/rc/:name" 
						component={RC} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
