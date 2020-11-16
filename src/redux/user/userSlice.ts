import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';

interface UserState {
  signedIn: boolean;
  token: string;
  name: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  signedIn: false,
  name: '',
  token: '',
  error: '',
  isLoading: false,
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
    signInSuccess: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        signedIn: true,
        name: action.payload,
        isLoading: false,
      };
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
    errorClear: (state) => {
      return {
        ...state,
        error: '',
      };
    },
    setLoading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const {
  signInSuccess,
  signInFailure,
  signUpFailure,
  errorClear,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;

export const signedInSelector = (state: {user: UserState}) =>
  state.user.signedIn;

export const errorSelector = (state: {user: UserState}) => state.user.error;

export const usernameSelector = (state: {user: UserState}) => state.user.name;

export const isLoadingSelector = (state: {user: UserState}) =>
  state.user.isLoading;
