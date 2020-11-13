import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import {Comments} from '../data';

interface CommentsState {
  id: number;
  cardId: number;
  name: string;
  text: string;
}

const initialState: CommentsState[] = Comments;

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<[number, string, string]>) => {
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

    editComment: (state, action: PayloadAction<[number, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, text: value};
        }
        return item;
      });
    },

    deleteComment: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {addComment, editComment, deleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;

export const commentsSelector = (state: {comments: CommentsState[]}) =>
  state.comments;

export const cardCommentsSelector = (id: number) =>
  createSelector([commentsSelector], (comments: CommentsState[]) =>
    comments.filter((item) => item.cardId === id),
  );
