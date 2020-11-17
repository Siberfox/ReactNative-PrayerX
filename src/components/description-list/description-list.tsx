import React from 'react';
import {View, Text} from 'react-native';

import {DescriptionListProps} from '../../types';

import styles from './description-list.styles';

const DescriptionList: React.FC<DescriptionListProps> = ({
  prayedByMe,
  prayedByOthers,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.date}>July 25 2017</Text>
        <Text style={styles.text}>Date Added</Text>
        <Text style={styles.subtitle}>Opened for 4 days</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>{prayedByMe + prayedByOthers}</Text>
        <Text style={styles.text}>Times Prayed Total</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>{prayedByMe}</Text>
        <Text style={styles.text}>Times Prayed by Me</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>{prayedByOthers}</Text>
        <Text style={styles.text}>Times Prayed by Others</Text>
      </View>
    </View>
  );
};

export default DescriptionList;
