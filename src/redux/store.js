import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import rootReducer from "./root-reducer";

const middlewares = [logger];

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

const store = createStore( persistedReducer, applyMiddleware( ...middlewares ) );

const persistor = persistStore( store );

export default {
    store,
    persistor
}
