import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {homeApi, locationApi} from './services/api'


export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware).concat(locationApi.middleware),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
