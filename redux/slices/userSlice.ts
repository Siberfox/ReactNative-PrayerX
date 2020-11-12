import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  signedIn: boolean;
}

const initialState: UserState = {
  signedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignedIn: (state, action: PayloadAction) => {
      return {
        ...state,
        signedIn: true,
      };
    },
  },
});

export const { setSignedIn } = userSlice.actions;

export default userSlice.reducer;

export const signedInSelector = (state: { user: UserState }) =>
  state.user.signedIn;
