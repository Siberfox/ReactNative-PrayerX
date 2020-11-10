import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import Desk from '../screens/desk/desk';
import Card from '../screens/card/card';
import Column from '../screens/column/column';
import Auth from '../screens/auth/auth';

import Plus from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/Feather';

const MainStack = createStackNavigator();

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {isSignedIn ? (
          <>
            <MainStack.Screen
              name="Desk"
              component={Desk}
              options={{
                title: 'My Desk',
                headerRight: () => (
                  <TouchableOpacity>
                    <Plus
                      name="plus"
                      size={28}
                      color="#72A8BC"
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <MainStack.Screen
              name="Column"
              component={Column}
              options={{
                title: '??Column',
                headerRight: () => (
                  <TouchableOpacity>
                    <Settings
                      name="settings"
                      size={28}
                      color="#72A8BC"
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <MainStack.Screen name="Card" component={Card} />
          </>
        ) : (
          <>
            <MainStack.Screen
              name="Auth"
              component={Auth}
              options={{
                title: 'Authorization',
                headerRight: () => (
                  <TouchableOpacity onPress={() => setIsSignedIn(true)}>
                    SignIn
                  </TouchableOpacity>
                ),
              }}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
