import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(props) {
	return (
		<div className="Home">
			<Navbar />
			<div className="RC-list">
				{props.rcs.map((rc) => (
					<Link to={`/rc/${rc.name.toLowerCase()}`}>
						{rc.name}
					</Link>
				))}
			</div>
		</div>
	);
}
