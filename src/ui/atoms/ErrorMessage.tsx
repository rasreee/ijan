import React, { HTMLAttributes } from 'react';
import Span from './Span/Span';

interface IErrorMessage extends HTMLAttributes<HTMLSpanElement> {
	text: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ text }) => {
	return <Span error>{text}</Span>;
};

export default ErrorMessage;
