import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';

interface UserState {
  token: string;
  name: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
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
        name: action.payload,
        isLoading: false,
      };
    },
    requestFailure: (state, action: PayloadAction<string>) => {
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
  requestFailure,
  errorClear,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;

export const errorSelector = (state: {user: UserState}) => state.user.error;

export const usernameSelector = (state: {user: UserState}) => state.user.name;

export const isLoadingSelector = (state: {user: UserState}) =>
  state.user.isLoading;
