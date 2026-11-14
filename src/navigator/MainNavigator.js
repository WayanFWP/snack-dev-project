import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewedScreen from '../screens/MostViewedScreen';

const Stack = createStackNavigator();

const BackTitle = ({ title, navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={{ color: 'white', fontSize: 24 }}>{title}</Text>
  </TouchableOpacity>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Movie Collection',
            headerStyle: { backgroundColor: '#65c3ba' },
            headerTitleStyle: { color: 'white', fontSize: 24 },
            headerTitleAlign: 'center',
            headerLeft: () => null,
          }}
        />

        <Stack.Screen
          name="DetailMovie"
          component={DetailMovieScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#65c3ba' },
            headerTitle: () => (
              <BackTitle title="Detail Movie" navigation={navigation} />
            ),
            headerTitleAlign: 'left',
            headerLeft: () => null,
          })}
        />

        <Stack.Screen
          name="MostViewed"
          component={MostViewedScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#65c3ba' },
            headerTitle: () => (
              <BackTitle title="Most Viewed" navigation={navigation} />
            ),
            headerTitleAlign: 'left',
            headerLeft: () => null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;