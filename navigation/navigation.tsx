import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { signedInSelector } from '../redux/slices/userSlice';

import Desk from '../screens/desk/desk';
import Card from '../screens/card/card';
import Column from '../screens/column/column';
import Auth from '../screens/auth/auth';
import ColumnTitle from '../components/column-title/column-title';

import Icon from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';

export type RootStackParamList = {
  Desk: undefined;
  Column: { columnId: string; columnName: string };
  Card: undefined;
  Auth: undefined;
};

const BackArrow = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Icon
        name="arrowleft"
        size={28}
        color="#fff"
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>
  );
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const isSignedIn = useSelector(signedInSelector);

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
                    <Icon
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
                  elevation: 0,
                  shadowOpacity: 0,
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
            <RootStack.Screen
              name="Card"
              component={Card}
              options={{
                headerStyle: {
                  backgroundColor: '#BFB393',
                  borderBottomWidth: 0,
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTitle: () => null,
                headerRight: () => (
                  <TouchableOpacity>
                    <Hands
                      name="praying-hands"
                      size={25}
                      color="#fff"
                      style={{ marginRight: 15 }}
                    />
                  </TouchableOpacity>
                ),
                headerLeft: () => <BackArrow />,
              }}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Auth"
              component={Auth}
              options={{ title: 'Welcome' }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
