
import React from "react";
import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa';


const PlayTools = ({selectedSong, SongPlaying, setSongPlaying, CurrentSong, setCurrentSong}) => {

	const PlayPause = () => {

		setSongPlaying(!SongPlaying);

	};

	return (
		<div className="playerContainer">
			<div className="songTitle">
				<h1>Mario World Songs!</h1>
				<h3>{CurrentSong.name}</h3>
			</div>
			<div className="songTimmer">
				<div className="songTimerBar">
					<div className="momentBar" style={{width:`${CurrentSong.moment+"%"}`}}></div>
				</div>
			</div>
			<div className="controlButtons">
				<FaStepBackward className="buttonBack" />
				{SongPlaying ? <FaPause className="buttonPlayStop" onClick={PlayPause} /> : <FaPlay className="buttonPlayStop" onClick={PlayPause} />}
				<FaStepForward className="buttonFwd" />
			</div>
		</div>
	);
};

export default PlayTools;