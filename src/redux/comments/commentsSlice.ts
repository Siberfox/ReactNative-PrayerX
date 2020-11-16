import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {Comments} from '../data';

interface CommentsState {
  id: string;
  cardId: string;
  name: string;
  text: string;
}

const initialState: CommentsState[] = Comments;

export const getCommentsStart = createAction('GET_COMMENTS_START');

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<[string, string, string]>) => {
      const [id, value, username] = action.payload;
      return [
        ...state,
        {
          name: username,
          text: value,
          id: state[state.length - 1].id + 1,
          cardId: id,
        },
      ];
    },

    setComments: (state, action: PayloadAction<CommentsState[]>) => {
      return [...action.payload];
    },

    editComment: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, text: value};
        }
        return item;
      });
    },

    deleteComment: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addComment,
  editComment,
  deleteComment,
  setComments,
} = commentsSlice.actions;

export default commentsSlice.reducer;

export const commentsSelector = (state: {comments: CommentsState[]}) =>
  state.comments;
