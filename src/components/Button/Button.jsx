import ButtonSty from './Button.styles';

const Button = ({ src, id, content, handlePlay }) => (
	<ButtonSty id={id} className="drum-pad" onClick={() => handlePlay(content)}>
		<audio src={src} className="clip" id={content} />
		<div className="btn-content">{content}</div>
	</ButtonSty>
);

export default Button;
