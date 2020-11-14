import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import {Cards} from '../data';

interface CardsState {
  id: string;
  name: string;
  columnId: string;
  checked: boolean;
  subscribed: number;
  prayedByMe: number;
  prayedByOthers: number;
}

const initialState: CardsState[] = Cards;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return [
        ...state,
        {
          name: value,
          id: state[state.length - 1].id + 1,
          columnId: id,
          checked: false,
          subscribed: 0,
          prayedByMe: 0,
          prayedByOthers: 0,
        },
      ];
    },

    deleteCard: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),

    editCardName: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, name: value};
        }
        return item;
      });
    },

    addDescription: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {...item, description: value};
        }
        return item;
      });
    },

    deleteDescription: (state, action: PayloadAction<string>) => {
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

export const columnCardsSelector = (id: string) =>
  createSelector([cardsSelector], (cards: CardsState[]) =>
    cards.filter((card) => card.columnId === id),
  );
