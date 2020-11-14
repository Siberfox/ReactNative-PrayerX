import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {columnCardsSelector} from '../../redux/slices/cardsSlice';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './subscribed-list.styles';

interface SubscribedListProps {
  columnId: string;
}

const SubscribedList: React.FC<SubscribedListProps> = ({columnId}) => {
  const [isShowAnswered, setIsShowAnswered] = useState(false);
  const cards = useSelector(columnCardsSelector(columnId));

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cardList}
        contentContainerStyle={styles.cardListContainer}
        data={cards}
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
          data={cards}
          renderItem={({item}) => <CardPreview item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </View>
  );
};

export default SubscribedList;
