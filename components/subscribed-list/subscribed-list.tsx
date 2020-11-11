import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './subscribed-list.styles';

const SubscribedList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}> Subscribed</Text>
      </View>
    </View>
  );
};

export default SubscribedList;
