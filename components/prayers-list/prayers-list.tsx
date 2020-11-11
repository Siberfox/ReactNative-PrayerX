import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './prayers-list.styles';

const PrayersList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}> Prayers</Text>
      </View>
    </View>
  );
};

export default PrayersList;
