import React from 'react';

import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import styles from './comments-item.styles';

interface CommentsItemProps {
  item: {
    id: string;
    cardId: string;
    name: string;
    text: string;
  };
}

const CommentsItem: React.FC<CommentsItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={35}
        source={require('../../assets/image.png')}
        style={styles.avatar}
      />
      <View>
        <View style={styles.titleSection}>
          <Text style={styles.titleName}>{item.name}</Text>
          <Text style={styles.titleDate}>2 days ago</Text>
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

export default CommentsItem;
