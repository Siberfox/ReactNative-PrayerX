import React, {useState} from 'react';
import {View, FlatList, TextInput} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  columnsSelector,
  isEditSelector,
  addColumn,
  editStart,
} from '../../redux/columns/columnsSlice';

import ColumnPreview from '../../components/column-preview/column-preview';

import Plus from 'react-native-vector-icons/AntDesign';

import styles from './desk.styles';

const Desk: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const columns = useSelector(columnsSelector);
  const isEdit = useSelector(isEditSelector);
  const dispatch = useDispatch();

  const onAddColumn = () => {
    if (inputValue) {
      dispatch(addColumn(inputValue));
      setInputValue('');
      dispatch(editStart());
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={columns}
        renderItem={({item}) => <ColumnPreview name={item.name} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
      {isEdit ? (
        <View style={styles.inputSection}>
          <Plus
            name="plus"
            size={28}
            color="#72A8BC"
            style={styles.inputIcon}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Add a column..."
            style={[styles.input]}
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
            onSubmitEditing={onAddColumn}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Desk;
