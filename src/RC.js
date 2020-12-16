import React from 'react';
import Washer from './Washer';
import './RC.css';
import MenuBar from './MenuBar';

export default function RC(props) {
	// let styles = {backgroundColor: washer.isFree ? '#DAF0FD' : '#FFDCDA'}
	return (
		<div className="RC">
			<MenuBar rc={props.rc} />
			<div className="washer-container">
				{props.rc.washers.map((washer) => (
					<Washer washer={washer} key={washer.id} />
				))}
			</div>
		</div>
	);
}
