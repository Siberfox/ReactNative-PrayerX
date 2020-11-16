import React, {useMemo, useState, useEffect} from 'react';
import {View, Text, TextInput, Alert, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  commentsSelector,
  addCommentStart,
  errorSelector,
  isLoadingSelector,
} from '../../redux/comments/commentsSlice';
import {usernameSelector} from '../../redux/user/userSlice';

import CommentsItem from '../comments-item/comments-item';
import Message from 'react-native-vector-icons/Feather';

import styles from './comments-list.styles';

interface CommentsListProps {
  cardId: string;
}

const CommentsList: React.FC<CommentsListProps> = ({cardId}) => {
  const [commentValue, setCommentValue] = useState('');
  const user = useSelector(usernameSelector);
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  const comments = useSelector(commentsSelector);
  const cardComments = useMemo(
    () => comments.comments.filter((item) => item.cardId === cardId),
    [comments, cardId],
  );

  const onAddComment = () => {
    if (commentValue) {
      dispatch(addCommentStart([cardId, commentValue, user]));
      setCommentValue('');
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error, dispatch]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#72A8BC"
          style={styles.loading}
        />
      ) : (
        <>
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
              onChangeText={(text) => setCommentValue(text)}
              value={commentValue}
              onSubmitEditing={onAddComment}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CommentsList;
