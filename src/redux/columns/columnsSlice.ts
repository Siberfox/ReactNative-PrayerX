import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Columns} from '../data';

interface ColumnsState {
  columns: {id: string; name: string}[];
  isEdit: boolean;
}

const initialState: ColumnsState = {columns: Columns, isEdit: false};

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
    editColumnName: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return {
        ...state,
        columns: state.columns.map((item) => {
          if (item.id === id) {
            return {...item, name: value};
          }
          return item;
        }),
      };
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
  editColumnName,
  deleteColumn,
  addColumn,
  editStart,
} = columnsSlice.actions;

export default columnsSlice.reducer;

export const columnsSelector = (state: {columns: ColumnsState}) =>
  state.columns.columns;

export const isEditSelector = (state: {columns: ColumnsState}) =>
  state.columns.isEdit;
