import { FirebaseProvider } from '@contexts';
import { RootStoreProvider } from '@contexts/RootStoreContext';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, tokens } from 'ui/styled/theme';

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
