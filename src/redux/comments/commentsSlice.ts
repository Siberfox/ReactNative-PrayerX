import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {Comments} from '../data';

interface CommentsState {
  comments: {id: string; cardId: string; name: string; text: string}[];
  isLoading: boolean;
  error: string;
}

const initialState: CommentsState = {
  comments: Comments,
  isLoading: false,
  error: '',
};

export const getCommentsStart = createAction('GET_COMMENTS_START');

export const addCommentStart = createAction<[string, string, string]>(
  'ADD_COMMENT_START',
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (
      state,
      action: PayloadAction<
        {id: string; cardId: string; name: string; text: string}[]
      >,
    ) => {
      return {...state, comments: [...action.payload]};
    },

    editComment: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.id === id) {
            return {...item, text: value};
          }
          return item;
        }),
      };
    },

    deleteComment: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        comments: state.comments.filter((item) => item.id !== action.payload),
      };
    },
    setCommentsLoading: (state) => {
      return {...state, isLoading: true};
    },
    requestCommentsFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
});

export const {
  editComment,
  deleteComment,
  setComments,
  setCommentsLoading,
  requestCommentsFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;

export const commentsSelector = (state: {comments: CommentsState}) =>
  state.comments;

export const errorSelector = (state: {cards: CommentsState}) =>
  state.cards.error;

export const isLoadingSelector = (state: {cards: CommentsState}) =>
  state.cards.isLoading;
