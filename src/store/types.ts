import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AnyAction, Store, Reducer, CombinedState } from 'redux';

import { AppState, AppActionTypes } from 'store/app/appTypes';

export type RootState = {
    readonly app: AppState;
};

export type AllActions = AppActionTypes;
export type CommonDispatch = ThunkDispatch<RootState, unknown, AllActions>;

export type AppDispatch = Store<RootState, AnyAction>['dispatch'];
export type ReduxState = ReturnType<
    Reducer<CombinedState<RootState>, AnyAction | AppActionTypes>
>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    AnyAction
>;
export const useTypedDispatch = (): TypedDispatch =>
    useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
