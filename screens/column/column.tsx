import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './column.styles';

const Column = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>??Column name</Text>
      </View>
    </View>
  );
};

export default Column;
