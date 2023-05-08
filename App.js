import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/HomePage';
import CategoryPage from './src/screens/CategoryPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'SharePal' }} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
