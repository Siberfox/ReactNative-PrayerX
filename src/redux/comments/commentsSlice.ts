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

export const addCommentStart = createAction<[string, string, string]>(
  'ADD_COMMENT_START',
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
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

export const {editComment, deleteComment, setComments} = commentsSlice.actions;

export default commentsSlice.reducer;

export const commentsSelector = (state: {comments: CommentsState[]}) =>
  state.comments;
