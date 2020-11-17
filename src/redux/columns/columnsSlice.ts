import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {Columns} from '../data';
import {ColumnsState} from '../../types';

const initialState: ColumnsState = {
  columns: Columns,
  isEdit: false,
  isLoading: false,
  error: '',
};

export const getColumnsStart = createAction('GET_COLUMNS_START');

export const addColumnStart = createAction<string>('ADD_COLUMN_START');

export const deleteColumnStart = createAction<number>('DELETE_COLUMN_START');

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumn: (
      state,
      action: PayloadAction<{id: number; title: string; userId: number}[]>,
    ) => {
      return {...state, columns: [...action.payload], isLoading: false};
    },
    editStart: (state) => {
      return {...state, isEdit: !state.isEdit};
    },
    setColumnLoading: (state) => {
      return {...state, isLoading: true};
    },
    requestColumnFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
});

export const {
  editStart,
  setColumn,
  setColumnLoading,
  requestColumnFailure,
} = columnsSlice.actions;

export default columnsSlice.reducer;

export const columnsSelector = (state: {columns: ColumnsState}) =>
  state.columns.columns;

export const isEditSelector = (state: {columns: ColumnsState}) =>
  state.columns.isEdit;

export const errorSelector = (state: {columns: ColumnsState}) =>
  state.columns.error;

export const isLoadingSelector = (state: {columns: ColumnsState}) =>
  state.columns.isLoading;
