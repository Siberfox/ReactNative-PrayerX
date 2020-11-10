import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns } from '../data';

interface ColumnsState {
  id: string;
  name: string;
}

const initialState: ColumnsState[] = Columns;

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    editColumnName: (state, action: PayloadAction<[string, string]>) => {
      const [id, value] = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        }
        return item;
      });
    },
  },
});

export const { editColumnName } = columnsSlice.actions;

export default columnsSlice.reducer;

export const columnsSelector = (state: { columns: ColumnsState[] }) =>
  state.columns;
