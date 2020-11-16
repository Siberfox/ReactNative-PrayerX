import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {usernameSelector} from '../redux/user/userSlice';
import {editStart} from '../redux/columns/columnsSlice';

import Desk from '../screens/desk/desk';
import Card from '../screens/card/card';
import Column from '../screens/column/column';
import Auth from '../screens/auth/auth';
import ColumnTitle from '../components/column-title/column-title';
import PrayedButton from '../components/prayed-button/prayed-button';

import Icon from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/Feather';

import styles from './navigation.styles';

export type RootStackParamList = {
  Desk: undefined;
  Column: {columnId: string; columnName: string};
  Card: {
    cardId: string;
  };
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
        style={styles.arrowleft}
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>
  );
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const user = useSelector(usernameSelector);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        {user ? (
          <>
            <RootStack.Screen
              name="Desk"
              component={Desk}
              options={{
                title: 'My Desk',
                headerRight: () => (
                  <TouchableOpacity onPress={() => dispatch(editStart())}>
                    <Icon
                      name="plus"
                      size={28}
                      color="#72A8BC"
                      style={styles.icon}
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
                      style={styles.icon}
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
                headerRight: () => <PrayedButton />,
                headerLeft: () => <BackArrow />,
              }}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Auth"
              component={Auth}
              options={{title: 'Welcome'}}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
