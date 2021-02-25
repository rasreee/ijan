import React from 'react';
import { Page } from '@containers';
import { Image } from '@atoms';
import IconPaths from 'ui/styled/theme/icon-paths';
import { useRouter } from 'next/router';
import { useAuthStore } from '@hooks';

const IndexPage = () => {
	const router = useRouter();
	const store = useAuthStore();
	if (store.currentUser) return router.push('/home');

	return (
		<Page title="iJan | Home">
			<Page.Section>
				<Image src={IconPaths.brand} />
				<Page.Description>
					For all your home or commercial cleaning needs .
				</Page.Description>
			</Page.Section>
		</Page>
	);
};

export default IndexPage;
