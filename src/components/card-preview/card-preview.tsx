import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {checkCard, deleteCardStart} from '../../redux/cards/cardsSlice';

import {View, Text, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import User from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';

import {CardPreviewProps} from '../../types';

import styles from './card-preview.styles';

const CardPreview: React.FC<CardPreviewProps> = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onChecked = () => {
    dispatch(checkCard(item.id));
  };

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(deleteCardStart(item.id))}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      containerStyle={styles.swipeableContainer}
      childrenContainerStyle={styles.swipeableChildContainer}>
      <View style={styles.cardPreview}>
        <View style={styles.cardStatus} />
        <Checkbox
          status={item.checked ? 'checked' : 'unchecked'}
          onPress={onChecked}
          color="#BFB393"
        />

        <TouchableOpacity
          style={styles.cardLink}
          onPress={() => navigation.navigate('Card', {cardId: item.id})}>
          <Text
            style={item.checked ? styles.cardTextChecked : styles.cardText}
            numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.cardIcons}>
            <User style={styles.icon} name="user" size={22} color="#72A8BC" />
            <Text>{item.subscribed}</Text>
            <Hands
              style={styles.icon}
              name="praying-hands"
              size={22}
              color="#72A8BC"
            />
            <Text>{item.prayedByMe + item.prayedByOthers}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default CardPreview;
