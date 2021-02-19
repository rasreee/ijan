import React from 'react';
import styled from 'styled-components';

interface IImage extends React.HTMLAttributes<HTMLImageElement> {
	src: string;
}

const Image: React.FC<IImage> = ({ src, ...props }) => {
	return <Container src={src} {...props} />;
};

export default Image;

const Container = styled.img``;
