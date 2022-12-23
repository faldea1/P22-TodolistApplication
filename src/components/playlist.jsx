import React, { useRef, useState, useEffect } from "react";
import MarioSongs from "./audios.jsx";
import PlayTools from "./playtools.jsx";

const PlayList = () => {
	const [Songs, setSongs] = useState(MarioSongs);
	const [SongPlaying, setSongPlaying] = useState(false);
	const [CurrentSong, setCurrentSong] = useState(MarioSongs[0]);

	//Referencia a audio tag:
	const selectedSong = useRef ();


	//Play y Pause Button:
	
	useEffect(() => {
		if(SongPlaying){
			selectedSong.current.play();
		}
		else{
			selectedSong.current.pause();
		}

	}, [SongPlaying]);



	return (
	<div className="songsPlayer">
		<audio src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" ref={selectedSong} />
		<PlayTools songs={Songs} setSongs={setSongs} SongPlaying={SongPlaying} setSongPlaying={setSongPlaying} selectedSong={selectedSong} />
	</div>
	);
};

export default PlayList;
