import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigation from './navigation/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <PaperProvider>
            <Navigation />
          </PaperProvider>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
