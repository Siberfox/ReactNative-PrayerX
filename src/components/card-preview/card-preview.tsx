import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';

import User from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';

import styles from './card-preview.styles';

const CardPreview: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.cardPreview}>
      <View style={styles.cardStatus} />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#BFB393"
      />
      <TouchableOpacity
        style={styles.cardLink}
        onPress={() => navigation.navigate('Card')}>
        <Text style={styles.cardText} numberOfLines={1}>
          Prayer item two which is for my family to love God whole heartedly.
        </Text>
        <View style={styles.cardIcons}>
          <User style={styles.icon} name="user" size={22} color="#72A8BC" />
          <Text>3</Text>
          <Hands
            style={styles.icon}
            name="praying-hands"
            size={22}
            color="#72A8BC"
          />
          <Text>120</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardPreview;
