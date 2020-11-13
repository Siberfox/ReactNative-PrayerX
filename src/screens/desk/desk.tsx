import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { columnsSelector } from '../../redux/slices/columnsSlice';
import { useNavigation } from '@react-navigation/native';

import styles from './desk.styles';

const Item: React.FC<{ name: string; id: string }> = ({ name, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.columnItem}
      onPress={() =>
        navigation.navigate('Column', { columnId: id, columnName: name })
      }
    >
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
        renderItem={({ item }) => <Item name={item.name} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Desk;
