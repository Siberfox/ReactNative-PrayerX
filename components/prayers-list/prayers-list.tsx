import React from 'react';
import { View, TextInput } from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './prayers-list.styles';

const PrayersList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Plus name="plus" size={28} color="#72A8BC" style={styles.inputIcon} />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Add a prayer..."
          style={[styles.input]}
        />
      </View>
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CustomButton text="Show Answered Prayers" />
      <CardPreview />
      <CardPreview />
    </View>
  );
};

export default PrayersList;
