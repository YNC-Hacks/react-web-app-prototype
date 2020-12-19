import React from 'react';
import Washer from '../Components/Washer';
import './RC.css';
import MenuBar from '../Components/MenuBar';
import {useParams} from 'react-router-dom'
import {data} from '../Constants/Data';

const RC = ({rc}) => {
	let { name } = useParams();
	const [washerData,setWasherData] = React.useState(null)
	
	React.useEffect(()=>{
		const RcData = data.rcs.filter(rc => rc.name.toLowerCase() === name)
		setWasherData(RcData[0])
	},[name])

	return(
		<>
			<MenuBar rc={name} />
			<div
				className="washer-container">
				{washerData && washerData.washers.map(washer => (
					<Washer 
						washer={washer} 
						key={washer.id} />
				))}
			</div>
		</>
	)
}

export default RC;