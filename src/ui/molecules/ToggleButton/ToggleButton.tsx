import React from 'react';

import { Container } from './styles';
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	disabled: boolean;
	onToggle: () => void;
	text: string;
}
function ToggleButton({ disabled, onToggle, text }: Props) {
	return (
		<Container
			onClick={(e) => {
				e.preventDefault();
				if (disabled) onToggle();
			}}
			disabled={disabled}
			primary
			text={text}
		/>
	);
}

export default ToggleButton;
