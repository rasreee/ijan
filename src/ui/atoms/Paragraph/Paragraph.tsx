import React from 'react';

import { Container } from './styles';
interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
	value: string;
}
const Paragraph: React.FC<Props> = ({ value, ...props }) => {
	return <Container {...props}>{value}</Container>;
};

export default Paragraph;
