import { Col } from '@bases';
import { tokens } from '@theme';
import styled from 'styled-components';

export const Container = styled(Col)`
	min-width: 200px;
	min-height: 100vh;
	background-color: ${tokens.colors.dark};
	height: 100%;
	padding: 24px 0;
`;
