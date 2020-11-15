import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert, ActivityIndicator} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  signUpStart,
  errorSelector,
  errorClear,
  isLoadingSelector,
} from '../../redux/user/userSlice';

import CustomButton from '../custom-button/custom-button';

import styles from './sign-up.styles';

const SignUp: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch(errorClear());
    }
  }, [error, dispatch]);

  const onSignIn = () => {
    if (emailValue && passwordValue) {
      dispatch(
        signUpStart({
          email: emailValue,
          username: usernameValue,
          password: passwordValue,
        }),
      );
      setEmailValue('');
      setUsernameValue('');
      setPasswordValue('');
    }
  };

  return (
    <View style={styles.content}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#72A8BC" />
      ) : (
        <>
          <TextInput
            placeholder="Email"
            style={[styles.input]}
            onChangeText={(text) => setEmailValue(text)}
            value={emailValue}
          />
          <TextInput
            placeholder="Username"
            style={[styles.input]}
            onChangeText={(text) => setUsernameValue(text)}
            value={usernameValue}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={[styles.input]}
            onChangeText={(text) => setPasswordValue(text)}
            value={passwordValue}
          />
          <CustomButton text="Sign Up" action={onSignIn} />
        </>
      )}
    </View>
  );
};

export default SignUp;
