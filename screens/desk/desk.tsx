import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { columnsSelector } from '../../redux/slices/columnsSlice';

import styles from './desk.styles';

const Item: React.FC<{ name: string }> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.columnItem}>
      <Text style={styles.columnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Desk: React.FC = () => {
  const columns = useSelector(columnsSelector);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={columns}
        renderItem={({ item }) => <Item name={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Desk;
