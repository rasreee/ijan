import styled from 'styled-components';

type Props = {
	color?: string;
};

export const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	background-color: ${({ color }) => color ?? 'transparent'};
`;
