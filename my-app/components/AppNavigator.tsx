import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
// wwdksdlsdk