import React from 'react';
import './Washer.css';

export default function Washer(props) {
	const { id, isFree } = props.washer;
	return (
		<div className={`Washer ${isFree ? 'Free' : 'Busy'}`}>
			<div className="icon">{isFree ? '😃' : '😩'}</div>
			<div className="info">
				<h1>{id}</h1>
				<p>{isFree ? 'Available' : 'Occupied'}</p>
			</div>
		</div>
	);
}
