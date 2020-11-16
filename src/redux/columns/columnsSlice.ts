import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {Columns} from '../data';

interface ColumnsState {
  columns: {id: string; name: string}[];
  isEdit: boolean;
}

const initialState: ColumnsState = {columns: Columns, isEdit: false};

export const getColumnsStart = createAction('GET_COLUMNS_START');

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            name: action.payload,
            id: state.columns[state.columns.length - 1].id + 1 + '',
          },
        ],
      };
    },
    setColumn: (state, action: PayloadAction<{id: string; name: string}[]>) => {
      return {...state, columns: [...action.payload]};
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        columns: state.columns.filter((item) => item.id !== action.payload),
      };
    },
    editStart: (state) => {
      return {...state, isEdit: !state.isEdit};
    },
  },
});

export const {
  deleteColumn,
  addColumn,
  editStart,
  setColumn,
} = columnsSlice.actions;

export default columnsSlice.reducer;

export const columnsSelector = (state: {columns: ColumnsState}) =>
  state.columns.columns;

export const isEditSelector = (state: {columns: ColumnsState}) =>
  state.columns.isEdit;
