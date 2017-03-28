var defaultState = {
  rows: 6,
  cols: 5
}

export const SET_ROWS = n => ({
  type: SET_ROWS,
  n
})

export const SET_COLS = n => ({
  type: SET_COLS,
  n
})

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case SET_ROWS:
      return {
        rows: Math.max(Math.floor(action.n), 1),
        cols: state.cols
      }
    case SET_COLS:
      return {
        rows: state.rows,
        cols: Math.max(Math.floor(action.n), 1)
      }
    default:
      return state
  }
}
