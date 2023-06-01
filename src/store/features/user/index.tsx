import { createSlice } from '@reduxjs/toolkit'

const initialState = null
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, {payload}) => {
      state = payload
    },
    clean: state => {
      state = initialState;
    },
    registerUser: (state, {payload}) => {}
  }
})

// Action creators are generated for each case reducer function
export const { set, clean, registerUser } = userSlice.actions

export default userSlice.reducer