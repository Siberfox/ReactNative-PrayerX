import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';

import Desk from '../screens/desk/desk';
import Card from '../screens/card/card';
import Column from '../screens/column/column';
import Auth from '../screens/auth/auth';
import ColumnTitle from '../components/column-title/column-title';

import Plus from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/Feather';

export type RootStackParamList = {
  Desk: undefined;
  Column: { columnId: string; columnName: string };
  Card: undefined;
  Auth: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {isSignedIn ? (
          <>
            <RootStack.Screen
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
            <RootStack.Screen
              name="Column"
              component={Column}
              options={{
                headerStyle: {
                  borderBottomWidth: 0,
                },
                headerTitle: (props) => <ColumnTitle {...props} />,
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
            <RootStack.Screen name="Card" component={Card} />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
