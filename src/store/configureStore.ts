import {
    Store,
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
    StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as Sentry from '@sentry/react';

import { appReducer, initialAppState } from 'store/app/appReducer';
import { RootState } from 'store/types';
import { BUILD_TYPE } from 'constants/appConstants';

const PERSIST_CONFIG = {
    key: 'root',
    storage,
};

export const initialState = { app: initialAppState };

export const rootReducer = persistReducer(
    PERSIST_CONFIG,
    combineReducers({
        app: appReducer,
    }),
);

const logger = createLogger({
    diff: true,
    collapsed: true,
});

const configureStoreDev = (): Store<RootState> => {
    const middleware = [thunk, logger];
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware)),
    );
};
const configureStoreProd = (): Store<RootState> => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const sentryReduxEnhancer = Sentry.createReduxEnhancer() as StoreEnhancer<
        any,
        any
    >;
    /* eslint-enable @typescript-eslint/no-explicit-any */
    const middleware = [thunk];
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), sentryReduxEnhancer),
    );
};
const configureStore =
    BUILD_TYPE === `production` ? configureStoreProd : configureStoreDev;

export const store = configureStore();
export const persistor = persistStore(store);
