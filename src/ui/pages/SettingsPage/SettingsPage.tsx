import { Col } from '@bases';
import { Heading } from '@containers/Page/styles';
import useAuthService from '@hooks/useAuthService';
import { useRouter } from 'next/router';
import React from 'react';
import LogoutButton from './LogoutButton';

import { Container } from './styles';

const SettingsPage: React.FC = () => {
	const { logout } = useAuthService();
	const { push } = useRouter();
	const tryLogout = async (): Promise<boolean> =>
		logout().then(() => push('/'));
	return (
		<Container>
			<Heading>Settings</Heading>
			<Col>
				<LogoutButton onClick={tryLogout} />
			</Col>
		</Container>
	);
};

export default SettingsPage;
