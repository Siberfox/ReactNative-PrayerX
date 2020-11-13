import React from 'react';
import {View, Text, TextInput} from 'react-native';

import CommentsItem from '../comments-item/comments-item';

import Message from 'react-native-vector-icons/Feather';

import styles from './comments-list.styles';

const CommentsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMMENTS</Text>
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
      <View style={styles.inputSection}>
        <Message
          name="message-square"
          size={25}
          color="#BFB393"
          style={styles.inputIcon}
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Add a comment..."
          style={[styles.input]}
        />
      </View>
    </View>
  );
};

export default CommentsList;
