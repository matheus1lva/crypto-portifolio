import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {AddAccount, Home, Report} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useRecoilState} from 'recoil';
import {currentAccountState} from './atoms';
import SelectAccountSource from './routes/SelectAccountSource/SelectAccountSource';
const Stack = createStackNavigator();

const App = () => {
  const [currentAccount] = useRecoilState(currentAccountState);

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
                headerStyle: {
                  backgroundColor: '#202020',
                },
                headerTintColor: '#fff',
                // @ts-ignore
                title: currentAccount.accountProvider,
              }}
            />
            <Stack.Screen
              name="SelectSource"
              component={SelectAccountSource}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddAccount"
              component={AddAccount}
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
