import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'react-native-fs';

const initialState = {
  accessToken: '',
  isLoadedIntro: false,//Lần đầu vào thì load trang introduce (giới thiệu)
  userInfo: null,

  listLoading: false,
  actionsLoading: false,
  error: null,
};
export const callTypes = {
  list: 'list',
  action: 'action',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },

    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    setLoadIntro: (state, action) => {
      state.isLoadedIntro = action.payload;
    },
  },
});
