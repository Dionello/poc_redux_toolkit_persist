import rootReducer from '../reducers';
import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({reducer: rootReducer});

export default store;
