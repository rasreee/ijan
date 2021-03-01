import React from 'react';

import { Container } from './styles';

interface IIcon extends React.HTMLAttributes<HTMLImageElement> {
	src: string;
}

const Icon: React.FC<IIcon> = ({ src, ...props }) => {
	return <Container {...props} src={src} />;
};

export default Icon;
