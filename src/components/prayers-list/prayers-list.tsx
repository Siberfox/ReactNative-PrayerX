import React, {useState, useMemo, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';

import {useSelector, useDispatch} from 'react-redux';
import {
  columnCardsSelector,
  addCardStart,
  errorSelector,
  isLoadingSelector,
} from '../../redux/cards/cardsSlice';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import {PrayersListProps} from '../../types';

import styles from './prayers-list.styles';

const PrayersList: React.FC<PrayersListProps> = ({columnId}) => {
  const [inputValue, setInputValue] = useState('');
  const [isShowAnswered, setIsShowAnswered] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

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
      dispatch(addCardStart([columnId, inputValue]));
      setInputValue('');
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error, dispatch]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#72A8BC"
          style={styles.loading}
        />
      ) : (
        <>
          <View style={styles.inputSection}>
            <Plus
              name="plus"
              size={28}
              color="#72A8BC"
              style={styles.inputIcon}
            />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Add a prayer..."
              style={styles.input}
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
        </>
      )}
    </View>
  );
};

export default PrayersList;
