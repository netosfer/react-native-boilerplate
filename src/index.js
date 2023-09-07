import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Store from './redux/stores';
import HomePage from './screens/home';
import Login from './screens/auth/login';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();



export default function () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <NavigationContainer>
          {isLoggedIn ? (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomePage} />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Giriş"
                options={{ headerShown: false }}
              >
                {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});