import React, {useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {columnCardsSelector} from '../../redux/cards/cardsSlice';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import {SubscribedListProps} from '../../types';

import styles from './subscribed-list.styles';

const SubscribedList: React.FC<SubscribedListProps> = ({columnId}) => {
  const [isShowAnswered, setIsShowAnswered] = useState(false);
  const cards = useSelector(columnCardsSelector(columnId));
  const uncheckedCards = useMemo(
    () => cards.filter((item) => item.checked !== true),
    [cards],
  );
  const checkedCards = useMemo(
    () => cards.filter((item) => item.checked === true),
    [cards],
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cardList}
        contentContainerStyle={styles.cardListContainer}
        data={uncheckedCards}
        renderItem={({item}) => <CardPreview item={item} />}
        keyExtractor={(item) => item.id}
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

export default SubscribedList;
