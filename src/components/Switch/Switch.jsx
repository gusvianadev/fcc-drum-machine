import SwitchSty from './Switch.styles';

const Switch = ({ currentState, onClick, content }) => (
	<SwitchSty currentState={currentState} onClick={onClick}>
		{content}
		<div className="switch-btn">
			<div />
		</div>
	</SwitchSty>
);

export default Switch;
