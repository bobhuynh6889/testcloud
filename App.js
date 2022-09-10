import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import RootNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
