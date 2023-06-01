import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'



export default configureStore({
  reducer: {
    loginCounter: counterReducer,
    user: counterReducer
  }
})