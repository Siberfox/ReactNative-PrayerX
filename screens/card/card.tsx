import React from 'react';
import { Text, View } from 'react-native';

import DescriptionList from '../../components/description-list/description-list';
import MembersList from '../../components/members-list/members-list';

import styles from './card.styles';

const Card: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Prayer item two which is for my family to love God whole heartedly.
        </Text>
      </View>

      <View style={styles.prayed}>
        <View style={styles.prayedStatus}></View>
        <Text style={styles.prayedText}>Last prayed 8 min ago</Text>
      </View>

      <DescriptionList />
      <MembersList />
    </View>
  );
};

export default Card;
