import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../navigation/navigation';

const ColumnTitle: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Column'>>();

  return (
    <View>
      <Text style={style.title}>{params?.columnName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default ColumnTitle;
