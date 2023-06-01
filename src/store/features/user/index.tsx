import { createSlice } from '@reduxjs/toolkit'

const initialState = null
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, {payload}) => payload,
    clean: state => initialState,
    registerUser: (state, {payload}) => state,
    login: (state, {payload}) => state
  }
})

// Action creators are generated for each case reducer function
export const { set, clean, registerUser, login } = userSlice.actions

export default userSlice.reducer