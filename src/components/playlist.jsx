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


	//Barra de tiempo:
	const instantPlaying = () => {

		const duration = selectedSong.current.duration; //duracion total de la canción.
		const actualtime = selectedSong.current.currentTime; //segundo de la canción.

		setCurrentSong({... CurrentSong, "moment": actualtime/duration * 100, "length": duration });

	};

	return (
	<div className="songsPlayer">
		<audio src={CurrentSong.url} ref={selectedSong} onTimeUpdate={instantPlaying} />
		<PlayTools Songs={Songs} setSongs={setSongs} SongPlaying={SongPlaying} setSongPlaying={setSongPlaying} selectedSong={selectedSong} CurrentSong={CurrentSong} setCurrentSong={setCurrentSong} />
	</div>
	);
};

export default PlayList;
