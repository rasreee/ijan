import styled from 'styled-components';
type Props = { size?: number; color: string; paddingLeft?: number };

export const Container = styled.span<Props>`
	font-size: ${({ size }: Props) => (size ? `${size}px` : '16px')};
	color: ${({ color }) => color};
	padding-left: ${({ paddingLeft = 10 }) => `${paddingLeft}}px`};
`;
