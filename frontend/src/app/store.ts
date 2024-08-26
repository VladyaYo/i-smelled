import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { homeApi } from './services/api'


export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
