import styled from 'styled-components';
type Props = { size?: number };

export const Container = styled.span`
	font-size: ${({ size }: Props) => (size ? `${size}px` : '16px')};
`;
