import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {useDispatch} from 'react-redux';
import {deleteCommentStart} from '../../redux/comments/commentsSlice';

import {CommentsItemProps} from '../../types';

import styles from './comments-item.styles';

const CommentsItem: React.FC<CommentsItemProps> = ({item}) => {
  const dispatch = useDispatch();

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(deleteCommentStart(item.id))}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      containerStyle={styles.swipeableContainer}
      childrenContainerStyle={styles.swipeableChildContainer}>
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
    </Swipeable>
  );
};

export default CommentsItem;
