import { useEffect, useState } from 'react';
import { SiFreecodecamp } from 'react-icons/si';
import GlobalStyles from './styles/Global.styles';
import { AppSty, DrumMachineSty } from './styles/App.styles';
import AppFn from './App.functions';
import Button from './components/Button/Button';
import Switch from './components/Switch/Switch';

const App = () => {
	const { banks } = AppFn();
	const [currentBank, setCurrentBank] = useState('bankOne');
	const [currentAudio, setCurrentAudio] = useState('Press a Drum!');
	const [volume, setVolume] = useState(0.5);
	const [power, setPower] = useState(true);

	const handlePlay = (audioTarget) => {
		const toPlay = document.getElementById(audioTarget);
		if (toPlay && power) {
			toPlay.volume = volume;
			toPlay.play();
			setCurrentAudio(toPlay.parentNode.id);
		}
	};

	useEffect(() => {
		[...document.getElementsByTagName('audio')].forEach(
			(audio) => (audio.volume = volume)
		);

		window.addEventListener('keydown', (e) =>
			handlePlay(e.key.toUpperCase())
		);

		return window.removeEventListener('keydown', handlePlay);
	}, [volume]);

	return (
		<AppSty>
			<GlobalStyles />
			<DrumMachineSty id="drum-machine">
				<div className="drum-machine__logo">
					fcc
					<SiFreecodecamp className="logo" />
				</div>
				<div className="container buttons-container">
					{banks[currentBank].map((btn) => (
						<Button
							key={btn.id}
							src={btn.url}
							id={btn.id}
							content={btn.keyTrigger}
							handlePlay={handlePlay}
							setCurrentAudio={setCurrentAudio}
						/>
					))}
				</div>
				<div className="container panel-container">
					<Switch
						currentState={power}
						content="Power"
						onClick={() => setPower(!power)}
					/>
					<div id="display-container">
						<div id="display">
							{power ? currentAudio : 'Power Off'}
						</div>
					</div>
					<div id="volume-slider-container">
						<input
							type="range"
							step="0.01"
							min="0"
							max="1"
							defaultValue="0.5"
							id="volume-slider"
							onChange={(e) => setVolume(e.target.value)}
						/>
					</div>
					<Switch
						content="Bank"
						currentState={currentBank === 'bankOne'}
						onClick={() =>
							setCurrentBank(
								currentBank === 'bankOne'
									? 'bankTwo'
									: 'bankOne'
							)
						}
					/>
				</div>
			</DrumMachineSty>
		</AppSty>
	);
};

export default App;
