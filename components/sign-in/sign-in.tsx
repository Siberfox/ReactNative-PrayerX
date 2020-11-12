import React from 'react';
import { View, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { setSignedIn } from '../../redux/slices/userSlice';

import CustomButton from '../custom-button/custom-button';

import styles from './sign-in.styles';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.content}>
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <CustomButton text="Sign in" action={() => dispatch(setSignedIn())} />
    </View>
  );
};

export default SignIn;
