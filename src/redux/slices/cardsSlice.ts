import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import {Cards} from '../data';

interface CardsState {
  id: number;
  name: string;
  columnId: number;
  description: string;
  author: string;
}

const initialState: CardsState[] = Cards;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<[number, string, string]>) => {
      const [id, value, username] = action.payload;
      return [
        ...state,
        {
          name: value,
          id: state[state.length - 1].id + 1,
          columnId: id,
          description: '',
          author: username,
        },
      ];
    },

    deleteCard: (state, action: PayloadAction<number>) =>
      state.filter((item) => item.id !== action.payload),

    editCardName: (state, action: PayloadAction<[number, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, name: value};
        }
        return item;
      });
    },

    addDescription: (state, action: PayloadAction<[number, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, description: value};
        }
        return item;
      });
    },

    deleteDescription: (state, action: PayloadAction<number>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {...item, description: ''};
        }
        return item;
      });
    },
  },
});

export const {
  addCard,
  addDescription,
  deleteCard,
  deleteDescription,
  editCardName,
} = cardsSlice.actions;

export default cardsSlice.reducer;

export const cardsSelector = (state: {cards: CardsState[]}) => state.cards;

export const columnCardsSelector = (id: number) =>
  createSelector([cardsSelector], (cards: CardsState[]) =>
    cards.filter((card) => card.columnId === id),
  );
