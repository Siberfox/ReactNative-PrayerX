import React, {useMemo} from 'react';
import {View, Text, TextInput} from 'react-native';

import {useSelector} from 'react-redux';
import {commentsSelector} from '../../redux/slices/commentsSlice';

import CommentsItem from '../comments-item/comments-item';
import Message from 'react-native-vector-icons/Feather';

import styles from './comments-list.styles';

interface CommentsListProps {
  cardId: string;
}

const CommentsList: React.FC<CommentsListProps> = ({cardId}) => {
  const comments = useSelector(commentsSelector);
  const cardComments = useMemo(
    () => comments.filter((item) => item.cardId === cardId),
    [comments, cardId],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMMENTS</Text>
      {cardComments.map((item) => (
        <CommentsItem key={item.id} item={item} />
      ))}
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
