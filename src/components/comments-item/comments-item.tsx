import React from 'react';

import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import styles from './comments-item.styles';

const CommentsItem = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={35}
        source={require('../../assets/eeww.png')}
        style={styles.avatar}
      />
      <View>
        <View style={styles.titleSection}>
          <Text style={styles.titleName}>Anna Barber</Text>
          <Text style={styles.titleDate}>2 days ago</Text>
        </View>
        <Text style={styles.text}>Hey, Hey!</Text>
      </View>
    </View>
  );
};

export default CommentsItem;
