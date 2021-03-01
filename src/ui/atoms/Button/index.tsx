import React from 'react';

import {
	PrimaryContainer,
	SecondaryContainer,
	Label,
	DisabledContainer
} from './styles';
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	disabled?: boolean;
	isLoading?: boolean;
	text?: any;
}
export default function Button({
	text,
	primary = false,
	disabled = false,
	isLoading = false,
	...props
}: Props) {
	let Container = primary ? PrimaryContainer : SecondaryContainer;
	if (disabled) Container = DisabledContainer;
	return (
		<Container {...props}>
			{isLoading ? <>loading...</> : <>{text}</>}
		</Container>
	);
}

interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: any;
}

Button.Label = function ButtonLabel({ children, ...props }: ButtonProps) {
	return <Label {...props}>{children}</Label>;
};
