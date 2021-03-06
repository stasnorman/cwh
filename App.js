import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from './components/registration';
import { HomeScreen } from './components/home';
import { LogIn } from './components/main';
import { RepeatePassword } from './components/repeateAccount';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={DetailsScreen} />
        <Stack.Screen options={{headerShown: false}} name="MainScreen" component={LogIn} />
        <Stack.Screen options={{headerShown: false}} name="RepeatePassword" component={RepeatePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
