import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/ReduxTK/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})