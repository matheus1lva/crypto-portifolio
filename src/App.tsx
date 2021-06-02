import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Home, Report} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
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
        <RecoilRoot>
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
                  headerStyle: {
                    backgroundColor: '#202020',
                  },
                  headerTintColor: '#fff',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RecoilRoot>
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
