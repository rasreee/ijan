import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
`;

export const Row = styled(Flex)`
	flex-direction: row;
`;

export const Col = styled(Flex)`
	flex-direction: column;
`;
