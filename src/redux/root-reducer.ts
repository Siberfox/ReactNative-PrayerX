import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import commentsReducer from './comments/commentsSlice';
import columnsReducer from './columns/columnsSlice';
import userReducer from './user/userSlice';
import cardsReducer from './cards/cardsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// AsyncStorage.clear();
// AsyncStorage.removeItem('token');

const rootReducer = combineReducers({
  cards: cardsReducer,
  comments: commentsReducer,
  columns: columnsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
