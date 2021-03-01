import { Span } from '@atoms';
import React from 'react';

import { Container } from './styles';
import Heading from '../../atoms/Heading';
import { Clock } from '@molecules';

interface IHomeContent extends React.HTMLAttributes<HTMLDivElement> {
	currentUser: User;
}

const HomeContent: React.FC<IHomeContent> = ({ currentUser }) => {
	return (
		<Container>
			<Heading>Welcome, {currentUser.firstName}</Heading>
			<Clock />
			<Span>You haven't clocked in today.</Span>
		</Container>
	);
};

export default HomeContent;
