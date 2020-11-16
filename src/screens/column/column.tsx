import React, {useEffect} from 'react';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';

import {useDispatch} from 'react-redux';
import {getCardsStart} from '../../redux/cards/cardsSlice';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SubscribedList from '../../components/subscribed-list/subscribed-list';
import PrayersList from '../../components/prayers-list/prayers-list';

import {Badge} from 'react-native-paper';

import styles from './column.styles';

const Tab = createMaterialTopTabNavigator();

const Column: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Column'>>();
  const {columnId} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsStart());
  }, [dispatch]);

  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="prayers"
        children={() => <PrayersList columnId={columnId} />}
        options={{tabBarLabel: 'MY PRAYERS'}}
      />
      <Tab.Screen
        name="subscribed"
        children={() => <SubscribedList columnId={columnId} />}
        options={{
          tabBarLabel: 'SUBSCRIBED',
          tabBarIcon: () => (
            <Badge visible={true} style={styles.badge}>
              3
            </Badge>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Column;
