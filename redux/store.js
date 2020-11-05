import AsyncStorage from '@react-native-community/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {AsyncStorage} from '@react-native-community/async-storage'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import rootReducer from './rootReducer'


const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store);

export default store;