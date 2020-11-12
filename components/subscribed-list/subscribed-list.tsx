import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './subscribed-list.styles';

const SubscribedList: React.FC = () => {
  return (
    <View style={styles.container}>
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CustomButton text="Show Answered Prayers" />
    </View>
  );
};

export default SubscribedList;
