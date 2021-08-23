import styled from 'styled-components';

const ButtonSty = styled.button`
	all: unset;
	background-color: #808080;
	border: none;
	border-radius: 5px;
	-webkit-box-shadow: 3px 3px 5px -1px #000000;
	box-shadow: 3px 3px 5px -1px #000000;
	cursor: pointer;
	display: flex;
	flex: 0 0 30%;
	margin: 0.3rem auto;
	padding: 1.5rem 0;
	text-align: center;
	text-transform: capitalize;

	:active {
		transform: translate(1px, 1px);
		-webkit-box-shadow: 2px 2px 5px -1px #000000;
		box-shadow: 2px 2px 5px -1px #000000;
	}

	& .btn-content {
		margin: auto;
	}
`;

export default ButtonSty;
