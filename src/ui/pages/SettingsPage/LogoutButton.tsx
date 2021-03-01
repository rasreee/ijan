import Button from '@atoms/Button';
import React, { useState } from 'react';

interface ILogoutButton {
	onClick: () => Promise<boolean>;
}

const LogoutButton: React.FC<ILogoutButton> = ({ onClick }) => {
	const [loading, setLoading] = useState(false);
	return (
		<Button
			text="Logout"
			onClick={async (e) => {
				setLoading(true);
				try {
					await onClick();
				} catch (err) {
					console.error(err);
				} finally {
					setLoading(false);
				}
			}}
		/>
	);
};

export default LogoutButton;
