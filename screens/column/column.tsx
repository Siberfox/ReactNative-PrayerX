import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';

import styles from './column.styles';

const Column = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Column'>>();
  const { columnId, columnName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{columnName}</Text>
      </View>
    </View>
  );
};

export default Column;
