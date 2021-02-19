import React from 'react';
import { Page } from '@containers';
import { Image } from '@atoms';
import IconPaths from 'ui/styled/theme/icon-paths';

const IndexPage = () => (
	<Page title="iJan | Home">
		<Page.Section>
			<Image src={IconPaths.brand} />
			<Page.Description>
				For all your home or commercial cleaning needs .
			</Page.Description>
		</Page.Section>
	</Page>
);

export default IndexPage;
