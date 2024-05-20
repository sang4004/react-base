import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;
      state.data = {
        id: user.u_id,
        name: user.u_name,
      };
    },
    logout: state => {
      state.data = null;
    },
  },
});

export const { login, logout } = userData.actions;

export default userData.reducer;
