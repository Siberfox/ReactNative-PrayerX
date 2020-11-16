import React, {useMemo, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {cardsSelector} from '../../redux/cards/cardsSlice';
import {getCommentsStart} from '../../redux/comments/commentsSlice';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';

import DescriptionList from '../../components/description-list/description-list';
import MembersList from '../../components/members-list/members-list';
import CommentsList from '../../components/comments-list/comments-list';

import styles from './card.styles';

const Card: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Card'>>();
  const {cardId} = route.params;
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);
  const card = useMemo(() => cards.filter((item) => item.id === cardId)[0], [
    cards,
    cardId,
  ]);

  useEffect(() => {
    dispatch(getCommentsStart());
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{card.name}</Text>
        </View>

        <View style={styles.prayed}>
          <View style={styles.prayedStatus} />
          <Text style={styles.prayedText}>Last prayed 8 min ago</Text>
        </View>

        <DescriptionList
          prayedByMe={card.prayedByMe}
          prayedByOthers={card.prayedByOthers}
        />
        <MembersList />
        <CommentsList cardId={card.id} />
      </View>
    </ScrollView>
  );
};

export default Card;
