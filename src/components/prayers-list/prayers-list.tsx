import React, {useState, useMemo} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';

import {useSelector, useDispatch} from 'react-redux';
import {columnCardsSelector, addCard} from '../../redux/cards/cardsSlice';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './prayers-list.styles';

interface PrayersListProps {
  columnId: string;
}

const PrayersList: React.FC<PrayersListProps> = ({columnId}) => {
  const [inputValue, setInputValue] = useState('');
  const [isShowAnswered, setIsShowAnswered] = useState(false);
  const dispatch = useDispatch();

  const cards = useSelector(columnCardsSelector(columnId));
  const uncheckedCards = useMemo(
    () => cards.filter((item) => item.checked !== true),
    [cards],
  );
  const checkedCards = useMemo(
    () => cards.filter((item) => item.checked === true),
    [cards],
  );

  const onAddCard = () => {
    if (inputValue) {
      dispatch(addCard([columnId, inputValue]));
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Plus name="plus" size={28} color="#72A8BC" style={styles.inputIcon} />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Add a prayer..."
          style={[styles.input]}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
          onSubmitEditing={onAddCard}
        />
      </View>
      <FlatList
        style={styles.cardList}
        data={uncheckedCards}
        renderItem={({item}) => <CardPreview item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardListContainer}
      />
      <CustomButton
        text={
          isShowAnswered ? 'hide Answered Prayers' : 'Show Answered Prayers'
        }
        action={() => setIsShowAnswered(!isShowAnswered)}
      />
      {isShowAnswered ? (
        <FlatList
          style={styles.cardList}
          contentContainerStyle={styles.cardListContainer}
          data={checkedCards}
          renderItem={({item}) => <CardPreview item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </View>
  );
};

export default PrayersList;
