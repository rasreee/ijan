import { Button, Input, Span } from '@atoms';
import { Column } from '@bases';
import React from 'react';

import { Container } from './styles';

interface FormProps extends BaseComponentProps {
	error: string;
}

export default function Form({ error, children, ...props }: FormProps) {
	return (
		<Container {...props}>
			<Span error>{error}</Span>
			<>{children}</>
		</Container>
	);
}

interface InputProps {
	value: string;
	label: string;
	name: string;
	placeholder?: string;
	type?: string;
	onChange: InputChangeEventHandler;
	required?: boolean;
}

Form.Input = function FormInput({
	type = 'text',
	placeholder = '',
	name,
	onChange,
	value,
	label,
	required = false,
	...props
}: InputProps) {
	return (
		<Column {...props}>
			<Input.Label required={required} value={label} />
			<Input name={name} type={type} value={value} onChange={onChange} />
		</Column>
	);
};
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	isLoading: boolean;
	children: any;
}

Form.Button = function FormButton({
	children,
	onClick,
	isLoading,
	...props
}: ButtonProps) {
	return (
		<Button
			primary
			onClick={onClick}
			style={{
				margin: '24px 0px',
				width: '160px',
				height: '40px',
				display: 'flex',
				justifyContent: 'center',
				flexGrow: 1,
				cursor: 'pointer'
			}}
			text={children}
			{...props}
		/>
	);
};
interface Props {
	name: string;
	value: string;
	label: string;
	onChange: InputChangeEventHandler;
	required?: boolean;
}
Form.TextField = function TextField({
	name,
	value,
	label,
	required = false,
	onChange
}: Props) {
	return (
		<Input.Container>
			<Input.Label required={required} value={label} />
			<Input name={name} value={value} type="text" onChange={onChange} />
		</Input.Container>
	);
};
