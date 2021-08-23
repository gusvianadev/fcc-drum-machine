import styled from 'styled-components';

const SwitchSty = styled.div`
	font-size: 0.8em;
	margin: 1rem auto;
	text-align: center;
	text-transform: capitalize;
	width: 50px;

	& .switch-btn {
		background-color: #000000;
		cursor: pointer;
		display: flex;
		padding: 3px;

		& > * {
			background-color: #0000ff;
			height: 15px;
			margin-left: ${({ currentState }) => (currentState ? '0' : 'auto')};
			width: 15px;
		}
	}
`;

export default SwitchSty;
