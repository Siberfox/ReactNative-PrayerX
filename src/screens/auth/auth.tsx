import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const AuthTab = createMaterialTopTabNavigator();

const Auth: React.FC = () => {
  return (
    <AuthTab.Navigator
      tabBarOptions={{
        activeTintColor: '#72A8BC',
        inactiveTintColor: '#C8C8C8',
        indicatorStyle: {
          backgroundColor: '#72A8BC',
        },
        labelStyle: {fontSize: 13, lineHeight: 16, fontWeight: 'bold'},
        tabStyle: {flexDirection: 'row-reverse'},
        showIcon: true,
        showLabel: true,
      }}>
      <AuthTab.Screen
        name="signIn"
        component={SignIn}
        options={{tabBarLabel: 'SIGN IN'}}
      />
      <AuthTab.Screen
        name="signUp"
        component={SignUp}
        options={{
          tabBarLabel: 'SIGN UP',
        }}
      />
    </AuthTab.Navigator>
  );
};

export default Auth;
