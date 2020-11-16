import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
import {Cards} from '../data';

interface CardsState {
  cards: {
    id: string;
    name: string;
    columnId: string;
    checked: boolean;
    subscribed: number;
    prayedByMe: number;
    prayedByOthers: number;
  }[];
  isLoading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: Cards,
  isLoading: false,
  error: '',
};

export const getCardsStart = createAction('GET_CARDS_START');

export const addCardStart = createAction<[string, string]>('ADD_CARD_START');

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (
      state,
      action: PayloadAction<
        {
          id: string;
          name: string;
          columnId: string;
          checked: boolean;
          subscribed: number;
          prayedByMe: number;
          prayedByOthers: number;
        }[]
      >,
    ) => {
      return {...state, cards: [...action.payload], isLoading: false};
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

    deleteCard: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload),
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
  deleteCard,
  addCardPrayed,
  checkCard,
  setCards,
  setCardsLoading,
  requestCardsFailure,
} = cardsSlice.actions;

export default cardsSlice.reducer;

export const cardsSelector = (state: {cards: CardsState}) => state.cards;

export const columnCardsSelector = (id: string) =>
  createSelector([cardsSelector], (cards: CardsState) =>
    cards.cards.filter((card) => card.columnId === id),
  );

export const errorSelector = (state: {cards: CardsState}) => state.cards.error;

export const isLoadingSelector = (state: {cards: CardsState}) =>
  state.cards.isLoading;
