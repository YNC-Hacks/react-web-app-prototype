import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import RC from './RC';

function App() {
	let data = {
		rcs: [
			{
				name: 'Cendana',
				washers: [
					{ id: 'Washer 1', isFree: true },
					{ id: 'Washer 2', isFree: false },
					{ id: 'Washer 3', isFree: false },
					{ id: 'Washer 4', isFree: true },
					{ id: 'Washer 5', isFree: true },
					{ id: 'Washer 6', isFree: false }
				]
			},
			{
				name: 'Elm',
				washers: [
					{ id: 'Washer 1', isFree: true },
					{ id: 'Washer 2', isFree: true },
					{ id: 'Washer 3', isFree: false },
					{ id: 'Washer 4', isFree: true },
					{ id: 'Washer 5', isFree: false },
					{ id: 'Washer 6', isFree: false }
				]
			},
			{
				name: 'Saga',
				washers: [
					{ id: 'Washer 1', isFree: true },
					{ id: 'Washer 2', isFree: true },
					{ id: 'Washer 3', isFree: true },
					{ id: 'Washer 4', isFree: false },
					{ id: 'Washer 5', isFree: true },
					{ id: 'Washer 6', isFree: false }
				]
			}
		]
	};

	const getRC = (props) => {
		let name = props.match.params.name;
		let currentRC = data.rcs.find(
			(rc) => rc.name.toLowerCase() === name.toLowerCase()
		);
		return <RC {...props} rc={currentRC} key={currentRC.name} />;
	};

	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Home rcs={data.rcs} />}
				/>
				<Route exact path="/rc/:name" render={getRC} />
			</Switch>
		</div>
	);
}

export default App;
