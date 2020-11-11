import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './sign-up.styles';

const SignUp = () => {
  return (
    <View style={styles.content}>
      <TextInput placeholder="Email" style={[styles.input]} />
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <Button
        mode="contained"
        onPress={() => alert('hi')}
        style={styles.button}
      >
        Sign in
      </Button>
    </View>
  );
};

export default SignUp;
