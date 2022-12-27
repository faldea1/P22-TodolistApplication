import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaTasks } from 'react-icons/fa';


const ToDefine = () => {
	return (
	<div className="container">
		<h1>My To Do List <span><FaTasks /></span></h1>
		<ul>
			<li><input type="text" placeholder="Add a morning action to start a good day"></input></li>
			<li>Make the bed</li>
			<li>Sport</li>
			<li>Take a Shower</li>
			<li>Breakfast</li>
			<li>Brush Teeths</li>
			<li>Start the day with a Coffe</li>	
		</ul>
		<div>Number of Actions</div>
	</div>
	);
};

export default ToDefine;
