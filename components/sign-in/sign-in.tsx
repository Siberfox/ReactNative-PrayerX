import React from 'react';
import { View, TextInput } from 'react-native';

import CustomButton from '../custom-button/custom-button';

import styles from './sign-in.styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.content}>
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <CustomButton text="Sign in" />
    </View>
  );
};

export default SignIn;
