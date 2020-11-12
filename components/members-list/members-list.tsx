import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from 'react-native-paper';

import CustomButton from '../custom-button/custom-button';

import styles from './members-list.styles';

const MembersList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEMBERS</Text>
      <View style={styles.block}>
        <Avatar.Image
          size={35}
          source={require('../../assets/eeww.png')}
          style={styles.avatar}
        />
        <Avatar.Image
          size={35}
          source={require('../../assets/erfer.png')}
          style={styles.avatar}
        />
        <Avatar.Icon size={35} icon="plus" style={styles.button} color="#fff" />
      </View>
    </View>
  );
};

export default MembersList;
