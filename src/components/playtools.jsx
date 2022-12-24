
import React, { useRef } from "react";
import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa';
import MarioSongs from "./audios.jsx";


const PlayTools = ({selectedSong, SongPlaying, setSongPlaying, CurrentSong, setCurrentSong, Songs}) => {

	const clickBar = useRef();
	const PlayPause = () => {

		setSongPlaying(!SongPlaying);

	};


	const SongTimer = (e) => {

		let width = clickBar.current.clientWidth; //100% DEL ANCHO DE "BARRA".
		const offset = e.nativeEvent.offsetX; //EJE X DE IZQ. A DERECHA.

		const divmoment = offset / width * 100; //ENTREGA % DEL TOTAL DEL ANCHO DE "BARRA".
		selectedSong.current.currentTime = divmoment / 100 * CurrentSong.length; //% DEL "LARGO" DE LA CANCIÓN.

	};


	const goBack = () => {

		const index = Songs.findIndex(x => x.name === CurrentSong.name);

		if (index === 0){
			setCurrentSong(Songs[Songs.length - 1]);
		}
		else{
			setCurrentSong(Songs[index - 1]);
		}

		selectedSong.current.currentTime = 0; // Canción anterior desde el inicio.

	};


	const goFwd = () => {

		const index = Songs.findIndex(x => x.name === CurrentSong.name);

		if (index === Songs.length-1){
			setCurrentSong(Songs[0]);
		}
		else{
			setCurrentSong(Songs[index + 1]);
		}

		selectedSong.current.currentTime = 0; // Canción anterior desde el inicio.

	};


	const MCClick = () => {

		setCurrentSong(Songs[0]);

		setSongPlaying(!SongPlaying);




	selectedSong.current.currentTime = 0; 

};



	const MSClick = () => {

			setCurrentSong(Songs[1]);

			setSongPlaying(!SongPlaying);


		selectedSong.current.currentTime = 0; 

	};


	const MOClick = () => {

		setCurrentSong(Songs[2]);

		setSongPlaying(!SongPlaying);


	selectedSong.current.currentTime = 0; 

};










	return (
		<div className="playerContainer">
			<div className="songTitle">
				<h1>Mario World Songs!</h1>
				<h3>{CurrentSong.name}</h3>
			</div>
		<div className="songsList">
		<table class="table table-striped table-dark">
  			<thead>
    			<tr>
      				<th scope="col">#</th>
      				<th scope="col">Songs</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr className="MC" onClick={MCClick}>
      				<th scope="row">1</th>
      				<td>Mario Castle</td>
				</tr>
				<tr className="MS" onClick={MSClick}>
 					<th scope="row">2</th>
					<td>Mario Star</td>
				</tr>
				<tr className="MO" onClick={MOClick}>
    				<th scope="row">3</th>
  					<td>Mario Overworld</td>
    			</tr>
			</tbody>
		</table>
		</div>
			<div className="songTimmer">
				<div className="songTimerBar" onClick={SongTimer} ref={clickBar}>
					<div className="momentBar" style={{width:`${CurrentSong.moment+"%"}`}}></div>
				</div>
			</div>
			<div className="controlButtons">
				<FaStepBackward className="buttonBack" onClick={goBack} />
				{SongPlaying ? <FaPause className="buttonPlayStop" onClick={PlayPause} /> : <FaPlay className="buttonPlayStop" onClick={PlayPause} />}
				<FaStepForward className="buttonFwd" onClick={goFwd} />
			</div>
		</div>
	);
};

export default PlayTools;