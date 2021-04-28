import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Home} from './routes';

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: '#5140BA',
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar />
        <Home />
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: 'white',
        }}
      />
    </>
  );
};

export default App;
