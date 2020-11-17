import React from 'react';
import {Button} from 'react-native-paper';

import {CustomButtonProps} from '../../types';

import styles from './custom-button.styles';

const CustomButton: React.FC<CustomButtonProps> = ({text, action}) => {
  return (
    <Button mode="contained" onPress={action} style={styles.button}>
      {text}
    </Button>
  );
};

export default CustomButton;
