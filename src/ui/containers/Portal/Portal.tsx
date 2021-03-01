import { AuthLayout } from '@layouts';
import { observer } from 'mobx-react';
import React from 'react';

const Portal: React.FC = ({ children }) => {
	return <AuthLayout>{children}</AuthLayout>;
};
export default observer(Portal);
