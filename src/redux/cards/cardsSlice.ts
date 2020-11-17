import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
import {Cards} from '../data';
import {CardsState, CardList} from '../../types';

const initialState: CardsState = {
  cards: Cards,
  isLoading: false,
  error: '',
};

export const getCardsStart = createAction('GET_CARDS_START');

export const addCardStart = createAction<[number, string]>('ADD_CARD_START');

export const deleteCardStart = createAction<string>('DELETE_CARD_START');

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardList[]>) => {
      return {...state, cards: action.payload, isLoading: false};
    },

    addCardPrayed: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload) {
            return {...item, prayedByMe: item.prayedByMe + 1};
          }
          return item;
        }),
      };
    },

    checkCard: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload) {
            return {...item, checked: !item.checked};
          }
          return item;
        }),
      };
    },

    setCardsLoading: (state) => {
      return {...state, isLoading: true};
    },
    requestCardsFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
});

export const {
  addCardPrayed,
  checkCard,
  setCards,
  setCardsLoading,
  requestCardsFailure,
} = cardsSlice.actions;

export default cardsSlice.reducer;

export const cardsSelector = (state: {cards: CardsState}) => state.cards;

export const columnCardsSelector = (id: number) =>
  createSelector([cardsSelector], (cards: CardsState) =>
    cards.cards.filter((card) => card.columnId === id),
  );

export const errorSelector = (state: {cards: CardsState}) => state.cards.error;

export const isLoadingSelector = (state: {cards: CardsState}) =>
  state.cards.isLoading;
