import { Sidebar } from '@components';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, Content } from './styles';

interface IAuthLayout extends React.HTMLAttributes<HTMLDivElement> {
	pathname: string;
	push: (path: string) => Promise<boolean>;
}

const AuthLayout: React.FC<IAuthLayout> = ({ pathname, push, children }) => {
	return (
		<Container>
			<Sidebar path={pathname} push={push} />
			<Content> {children}</Content>
		</Container>
	);
};

export default AuthLayout;
