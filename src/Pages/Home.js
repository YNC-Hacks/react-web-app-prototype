import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import {data} from '../Constants/Data'


export default function Home(props) {
	const [washerData,setWasherData] = React.useState(null)

	React.useEffect(()=>{
		//This should eventually call the backend API to update it. For now we mock it with the data file
		setWasherData(data)
	},[])

	return (
		<div className="Home">
			<Navbar />
			<div className="RC-list">
				{washerData && washerData.rcs.map((rc) => (
					<Link to={`/rc/${rc.name.toLowerCase()}`}>
						{rc.name}
					</Link>
				))}
			</div>
		</div>
	);
}
