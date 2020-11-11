import React from 'react';

import { Button } from 'react-native-paper';

import styles from './custom-button.styles';

const CustomButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button mode="contained" onPress={() => alert('hi')} style={styles.button}>
      {text}
    </Button>
  );
};

export default CustomButton;
