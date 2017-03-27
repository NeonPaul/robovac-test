import enums from '../../enums'

export const types = enums(
  'COUNT'
)

export const count  = () => ({
  type: types.COUNT
})

export const asyncCount = (timeout) =>
  dispatch => {
    setTimeout(() => dispatch(count()), timeout)
  }
