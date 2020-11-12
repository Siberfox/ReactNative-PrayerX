import React, { useState } from 'react';

import { View, Text, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';

import User from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';

import styles from './card-preview.styles';

const CardPreview = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.cardPreview}>
      <View style={styles.cardStatus}></View>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#BFB393"
      />
      <Text style={styles.cardText} numberOfLines={1}>
        Prayer item two which is for my family to love God whole heartedly.
      </Text>
      <View style={styles.cardIcons}>
        <User name="user" size={25} color="#72A8BC" />
        <Text>3</Text>
        <Hands name="praying-hands" size={25} color="#72A8BC" />
        <Text>120</Text>
      </View>
    </View>
  );
};

export default CardPreview;
