import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';

import DescriptionList from '../../components/description-list/description-list';
import MembersList from '../../components/members-list/members-list';
import CommentsList from '../../components/comments-list/comments-list';

import styles from './card.styles';

const Card: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Card'>>();
  const {item} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.name}</Text>
        </View>

        <View style={styles.prayed}>
          <View style={styles.prayedStatus} />
          <Text style={styles.prayedText}>Last prayed 8 min ago</Text>
        </View>

        <DescriptionList
          prayedByMe={item.prayedByMe}
          prayedByOthers={item.prayedByOthers}
        />
        <MembersList />
        <CommentsList cardId={item.id} />
      </View>
    </ScrollView>
  );
};

export default Card;
