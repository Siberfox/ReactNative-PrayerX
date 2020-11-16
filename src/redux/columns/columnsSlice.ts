import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {Columns} from '../data';

interface ColumnsState {
  columns: {id: string; name: string}[];
  isEdit: boolean;
}

const initialState: ColumnsState = {columns: Columns, isEdit: false};

export const getColumnsStart = createAction('GET_COLUMNS_START');

export const addColumnStart = createAction<string>('ADD_COLUMN_START');

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
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

export const {deleteColumn, editStart, setColumn} = columnsSlice.actions;

export default columnsSlice.reducer;

export const columnsSelector = (state: {columns: ColumnsState}) =>
  state.columns.columns;

export const isEditSelector = (state: {columns: ColumnsState}) =>
  state.columns.isEdit;
