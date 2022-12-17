import React from "react";
import { FaHourglassHalf } from 'react-icons/fa';

const TheCounter = (props) => {
	return (

	<div className="theTimer container-fluid justify-content-center">
			<div className="chronometer"><FaHourglassHalf /></div>
			<div className="sixdigits">0</div>
			<div className="fivedigits">0</div>
			<div className="fourdigits">0</div>
			<div className="threedigits">0</div>
			<div className="twodigits">0</div>
			<div className="onedigit">0</div>
		</div>







	);
};

export default TheCounter;
