import { Button } from '@atoms';
import Header from '@containers/Header/Header';
import useAuthService from '@hooks/useAuthService';
import { useRouter } from 'next/router';
import React from 'react';

function AuthHeader() {
	const { logout } = useAuthService();
	const router = useRouter();
	const handleClick = () => {
		logout().then(() => {
			console.log('successfully logged out');
			router.push('/');
		});
	};
	return (
		<Header>
			<Button onClick={handleClick} text="logout" />
		</Header>
	);
}

export default AuthHeader;
