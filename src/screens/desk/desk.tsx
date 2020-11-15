import React from 'react';
import {View, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {columnsSelector} from '../../redux/columns/columnsSlice';

import ColumnPreview from '../../components/column-preview/column-preview';

import styles from './desk.styles';

const Desk: React.FC = () => {
  const columns = useSelector(columnsSelector);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={columns}
        renderItem={({item}) => <ColumnPreview name={item.name} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Desk;
