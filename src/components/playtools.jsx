
import React from "react";
import { FaStepBackward, FaPlay, FaStepForward } from 'react-icons/fa';


const PlayTools = ({selectedSong, SongPlaying, setSongPlaying}) => {

	const PlayPause = () => {

		setSongPlaying(!SongPlaying);

	};

	return (
		<div className="playerContainer">
			<div className="songTitle">
				<p>Mario World Songs</p>
			</div>
			<div className="controlButtons">
				<FaStepBackward className="buttonBack" />
				<FaPlay className="buttonPlayStop" onClick={PlayPause} />
				<FaStepForward className="buttonFwd" />
			</div>
		</div>
	);
};

export default PlayTools;