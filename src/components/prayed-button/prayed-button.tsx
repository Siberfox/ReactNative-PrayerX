import React from 'react';
import {TouchableOpacity} from 'react-native';
import Hands from 'react-native-vector-icons/FontAwesome5';

import {useDispatch} from 'react-redux';
import {addCardPrayed} from '../../redux/cards/cardsSlice';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';

import styles from './prayed-button.styles';

const PrayedButton = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Card'>>();
  const {cardId} = route.params;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(addCardPrayed(cardId))}>
      <Hands
        name="praying-hands"
        size={25}
        color="#fff"
        style={styles.button}
      />
    </TouchableOpacity>
  );
};

export default PrayedButton;
