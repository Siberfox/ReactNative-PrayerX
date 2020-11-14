import React, {useState} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';

import {useSelector} from 'react-redux';
import {columnCardsSelector} from '../../redux/slices/cardsSlice';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './prayers-list.styles';

interface PrayersListProps {
  columnId: string;
}

const PrayersList: React.FC<PrayersListProps> = ({columnId}) => {
  const [isShowAnswered, setIsShowAnswered] = useState(false);
  const cards = useSelector(columnCardsSelector(columnId));

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Plus name="plus" size={28} color="#72A8BC" style={styles.inputIcon} />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Add a prayer..."
          style={[styles.input]}
        />
      </View>
      <FlatList
        style={styles.cardList}
        data={cards}
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
          data={cards}
          renderItem={({item}) => <CardPreview item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </View>
  );
};

export default PrayersList;
