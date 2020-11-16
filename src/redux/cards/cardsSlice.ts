import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
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

export const getCardsStart = createAction('GET_CARDS_START');

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
          id: state[state.length - 1].id + 1 + '',
          columnId: id,
          checked: false,
          subscribed: 0,
          prayedByMe: 0,
          prayedByOthers: 0,
        },
      ];
    },

    setCards: (state, action: PayloadAction<CardsState[]>) => {
      return [...action.payload];
    },

    addCardPrayed: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {...item, prayedByMe: item.prayedByMe + 1};
        }
        return item;
      });
    },

    checkCard: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {...item, checked: !item.checked};
        }
        return item;
      });
    },

    deleteCard: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const {
  addCard,
  deleteCard,
  addCardPrayed,
  checkCard,
  setCards,
} = cardsSlice.actions;

export default cardsSlice.reducer;

export const cardsSelector = (state: {cards: CardsState[]}) => state.cards;

export const columnCardsSelector = (id: string) =>
  createSelector([cardsSelector], (cards: CardsState[]) =>
    cards.filter((card) => card.columnId === id),
  );
