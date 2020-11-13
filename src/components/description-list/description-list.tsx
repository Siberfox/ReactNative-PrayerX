import React from 'react';
import {View, Text} from 'react-native';

import styles from './description-list.styles';

const DescriptionList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.date}>July 25 2017</Text>
        <Text style={styles.text}>Date Added</Text>
        <Text style={styles.subtitle}>Opened for 4 days</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>123</Text>
        <Text style={styles.text}>Times Prayed Total</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>63</Text>
        <Text style={styles.text}>Times Prayed Total</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>60</Text>
        <Text style={styles.text}>Times Prayed Total</Text>
      </View>
    </View>
  );
};

export default DescriptionList;
