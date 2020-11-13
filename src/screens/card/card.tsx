import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import DescriptionList from '../../components/description-list/description-list';
import MembersList from '../../components/members-list/members-list';
import CommentsList from '../../components/comments-list/comments-list';

import styles from './card.styles';

const Card: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Prayer item two which is for my family to love God whole heartedly.
          </Text>
        </View>

        <View style={styles.prayed}>
          <View style={styles.prayedStatus} />
          <Text style={styles.prayedText}>Last prayed 8 min ago</Text>
        </View>

        <DescriptionList />
        <MembersList />
        <CommentsList />
      </View>
    </ScrollView>
  );
};

export default Card;
