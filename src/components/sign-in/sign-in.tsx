import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  signInStart,
  errorSelector,
  errorClear,
} from '../../redux/user/userSlice';

import CustomButton from '../custom-button/custom-button';

import styles from './sign-in.styles';

const SignIn: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch(errorClear());
    }
  }, [error, dispatch]);

  const onSignIn = () => {
    if (emailValue && passwordValue) {
      dispatch(
        signInStart({
          email: emailValue,
          password: passwordValue,
        }),
      );
      setEmailValue('');
      setPasswordValue('');
    }
  };

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Email"
        style={[styles.input]}
        onChangeText={(text) => setEmailValue(text)}
        value={emailValue}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
        onChangeText={(text) => setPasswordValue(text)}
        value={passwordValue}
      />
      <CustomButton text="Sign in" action={onSignIn} />
    </View>
  );
};

export default SignIn;
