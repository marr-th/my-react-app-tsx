import { createSlice } from '@reduxjs/toolkit'

const initialState = null
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, {payload}) => {
      state = payload
    },
    clean: state => {
      state = initialState;
    },
    registerUser: state => {}
  }
})

// Action creators are generated for each case reducer function
export const { set, clean, registerUser } = counterSlice.actions

export default counterSlice.reducer