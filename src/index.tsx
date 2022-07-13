import React, { ReactElement, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
    useLocation,
    useNavigationType,
    createRoutesFromChildren,
    matchRoutes,
    BrowserRouter,
} from 'react-router-dom';
import { BrowserTracing } from '@sentry/tracing';
import * as Sentry from '@sentry/react';
import { CssBaseline, ThemeProvider, CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import 'fonts/Roboto-Regular.ttf';

import { darkTheme } from 'styles/theme';
import { store, persistor } from 'store/configureStore';
import App from 'components/App';

import packageJSON from '../package.json';

import 'styles/global.scss';

const DEVELOPMENT_INCLUDES = ['development', 'localhost', '0.0.0.0', '::1'];

const sentryDsn = process.env.SENTRY_DSN;
Sentry.init({
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.reactRouterV6Instrumentation(
                React.useEffect,
                useLocation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes,
            ),
        }),
    ],
    dsn: sentryDsn,
    release: `${packageJSON.name}@${packageJSON.version}`,
    autoSessionTracking: true,
    tracesSampleRate: 1.0,
    normalizeDepth: 10,
    environment: DEVELOPMENT_INCLUDES.some((phrase) =>
        window.location.href.includes(phrase),
    )
        ? 'development'
        : 'production',
});

// not great with TS, potentially for later
// export const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export const Root = (): ReactElement => {
    useEffect(() => {
        // https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press
        document.body.addEventListener('mousedown', () =>
            document.body.classList.add('using-mouse'),
        );
        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                document.body.classList.remove('using-mouse');
            }
        });
    }, []);

    return (
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate
                    loading={<CircularProgress />}
                    persistor={persistor}
                >
                    <HelmetProvider>
                        <ThemeProvider theme={darkTheme}>
                            <CssBaseline enableColorScheme />
                            <BrowserRouter>
                                <App />
                            </BrowserRouter>
                        </ThemeProvider>
                    </HelmetProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
};

const container = document.getElementById('root');
// Assertion supported by React docs, https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<Root />);
