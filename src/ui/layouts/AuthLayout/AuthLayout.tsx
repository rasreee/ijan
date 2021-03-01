import { Sidebar } from '@components';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, Content } from './styles';

interface IAuthLayout extends React.HTMLAttributes<HTMLDivElement> {}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
	const { pathname, push } = useRouter();
	return (
		<Container>
			<Sidebar
				path={pathname}
				onSelect={(next) => {
					push(next);
				}}
			/>
			<Content> {children}</Content>
		</Container>
	);
};

export default AuthLayout;
