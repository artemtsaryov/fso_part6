import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    text: null,
    timer: null
  },
  reducers: {
    notify(state, action) {
      clearTimeout(state.timer)
      return {
        text: action.payload.text,
        timer: action.payload.timer
      }
    },
    clear(state, action) {
      return {
        text: null,
        timer: null
      }
    }
  },
})

export const { notify, clear } = notificationSlice.actions

export const notifyWithTimeout = (text, timeout) => {
  return async (dispatch) => {
    const timer = setTimeout(() => {
      dispatch(clear())
    }, timeout * 1000)
    dispatch(notify({ text, timer }))
  }
}

export default notificationSlice.reducer