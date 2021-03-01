import { FirebaseProvider } from '@contexts';
import { RootStoreProvider } from '@contexts/RootStoreContext';
import { configure } from 'mobx';
import { enableStaticRendering } from 'mobx-react';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, tokens } from 'ui/styled/theme';

const IS_SERVER = typeof window === 'undefined';
enableStaticRendering(IS_SERVER);
configure({ enforceActions: 'observed' });

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<ThemeProvider theme={tokens}>
				<GlobalStyle />
				<FirebaseProvider>
					<RootStoreProvider>
						<Component {...pageProps} />
					</RootStoreProvider>
				</FirebaseProvider>
			</ThemeProvider>
		</React.StrictMode>
	);
}
