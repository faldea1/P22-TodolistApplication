import React from "react";
import { FaHourglassHalf } from 'react-icons/fa';

const TheCounter = (props) => {
	return (

	<div className="theTimer container-fluid justify-content-center">
			<div className="chronometer"><FaHourglassHalf /></div>
			<div className="sixdigits">{props.digitSix % 10}</div>
			<div className="fivedigits">{props.digitFive % 10}</div>
			<div className="fourdigits">{props.digitFour % 10}</div>
			<div className="threedigits">{props.digitThree % 10}</div>
			<div className="twodigits">{props.digitTwo % 10}</div>
			<div className="onedigit">{props.digitOne % 10}</div>
		</div>
	);
};

export default TheCounter;
