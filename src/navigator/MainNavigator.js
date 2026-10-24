import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewedScreen from '../screens/MostViewedScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movie Collection">
        <Stack.Screen
          name="Movie Collection"
          component={HomeScreen}
          options={{
            title: 'Header Text',
            headerStyle: {
              backgroundColor: 'lavender',
            },
            headerTitleStyle: {
              color: 'Green',
              fontSize: 24,
            },
            headerTitleAlign: 'cemter',
            headerLeft: null,
          }}
        />
        <Stack.Screen name="DetailMovie" component={DetailMovieScreen} />
        <Stack.Screen name="MostViewed" component={MostViewedScreen} />
      </Stack.Navigator>
    </NavigationContainer> // Nomor 1
  );
};

export default MainNavigator;
