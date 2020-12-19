import React from 'react';
import './Washer.css';
import {HAPPY,SAD,OCCUPIED,AVALIABLE} from '../Constants/Text';

export default function Washer({washer}) {
	const { id, isFree } = washer;
	return (
		<div className={`Washer ${isFree ? 'Free' : 'Busy'}`}>
			<div className="icon">{isFree ? HAPPY : SAD}</div>
			<div className="info">
				<h1>{id}</h1>
				<p>{isFree ? AVALIABLE : OCCUPIED}</p>
			</div>
		</div>
	);
}
