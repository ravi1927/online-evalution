// src/redux/store.js
import { applyMiddleware, combineReducers, compose ,Store} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import  { createLogger } from 'redux-logger';
import rootReducer from './slices/app.tsx';
import { configureStore } from '@reduxjs/toolkit'
import storageSession from 'redux-persist/lib/storage/session';


const persistConfig = {
    key: 'root',
    storage: storageSession,
  };
  const initialReducers = combineReducers({
    app: rootReducer,
});
  
  const persistedReducer = persistReducer(persistConfig, initialReducers);
  
  const loggerMiddleware = createLogger();
  
  const store = configureStore({
    reducer:persistedReducer, middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});
  const persistor = persistStore(store);
  
  export { store, persistor };
