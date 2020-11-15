import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useDispatch} from 'react-redux';
import {deleteColumn} from '../../redux/columns/columnsSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {useNavigation} from '@react-navigation/native';

import styles from './column-pteview.styles';

const ColumnPreview: React.FC<{name: string; id: string}> = ({name, id}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(deleteColumn(id))}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      containerStyle={styles.swipeableContainer}
      childrenContainerStyle={styles.swipeableChildContainer}>
      <TouchableOpacity
        style={styles.columnItem}
        onPress={() =>
          navigation.navigate('Column', {columnId: id, columnName: name})
        }>
        <Text style={styles.columnText}>{name}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ColumnPreview;
