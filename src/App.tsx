import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Home, Report} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#202020',
        }}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Report"
              component={Report}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: '#202020',
        }}
      />
    </>
  );
};

export default App;
