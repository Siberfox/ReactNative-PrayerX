import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';

interface UserState {
  signedIn: boolean;
  token: string;
  name: string;
  error: string;
}

const initialState: UserState = {
  signedIn: false,
  name: '',
  token: '',
  error: '',
};

export const signInStart = createAction<{
  email: string;
  password: string;
}>('SIGN_IN_START');
export const signUpStart = createAction<{
  email: string;
  username: string;
  password: string;
}>('SIGN_UP_START');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (
      state,
      action: PayloadAction<{name: string; token: string}>,
    ) => {
      const {name, token} = action.payload;
      return {
        ...state,
        signedIn: true,
        token,
        name,
      };
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    errorClear: (state) => {
      return {
        ...state,
        error: '',
      };
    },
  },
});

export const {
  signInSuccess,
  signInFailure,
  signUpFailure,
  errorClear,
} = userSlice.actions;

export default userSlice.reducer;

export const signedInSelector = (state: {user: UserState}) =>
  state.user.signedIn;

export const errorSelector = (state: {user: UserState}) => state.user.error;

export const usernameSelector = (state: {user: UserState}) => state.user.name;
