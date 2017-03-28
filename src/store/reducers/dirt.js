var defaultState = {
  locations: [
    { x: 1, y: 0 },
    { x: 0, y: 2 },
    { x: 4, y: 4 }
  ],
  removed: 0
}

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
