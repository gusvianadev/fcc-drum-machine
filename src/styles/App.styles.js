import styled from 'styled-components';

export const AppSty = styled.div`
	background-color: #8d8d8d;
	display: flex;
	font-weight: bold;
	height: 100%;
	width: 100%;
`;

export const DrumMachineSty = styled.div`
	background-color: #b3b3b3;
	border: 5px solid #ffa500;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	max-width: 768px;
	padding: 1rem 0.7rem;
	position: relative;
	user-select: none;
	width: 90%;

	& .drum-machine__logo {
		display: flex;
		font-style: italic;
		justify-content: flex-end;
		position: absolute;
		right: 3px;
		text-align: right;
		text-transform: uppercase;
		top: 3px;

		& .logo {
			font-size: 1.2em;
			margin-left: 0.2rem;
		}
	}

	& .container {
		@media (min-width: 768px) {
			max-width: 45%;
			margin: auto;
		}
	}

	& .buttons-container {
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 100%;
	}

	& .panel-container {
		margin: auto;
		width: 80%;

		& #display-container {
			background-color: #808080;
			display: flex;
			margin: auto;
			padding: 0.8rem 0;
			text-align: center;
			width: 50%;

			& #display {
				margin: auto;
			}
		}

		& #volume-slider-container {
			width: 80%;
			margin: auto;

			& #volume-slider {
				-webkit-appearance: none;
				appearance: none;
				background-color: #424242;
				border: 1px solid black;
				height: 4px;
				width: 100%;
			}

			& #volume-slider::-webkit-slider-thumb {
				appearance: none;
				background-color: #0000ff;
				cursor: pointer;
				height: 18px;
				width: 6px;
			}

			& #volume-slider::-moz-range-thumb {
				background-color: #0000ff;
				cursor: pointer;
				height: 18px;
				width: 6px;
			}
		}
	}
`;
