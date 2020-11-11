import React from 'react';
import { View, TextInput } from 'react-native';

import CustomButton from '../custom-button/custom-button';

import styles from './sign-up.styles';

const SignUp: React.FC = () => {
  return (
    <View style={styles.content}>
      <TextInput placeholder="Email" style={[styles.input]} />
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <CustomButton text="Sign Up" />
    </View>
  );
};

export default SignUp;
