import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, UPDATE_STREAM, DELETE_STREAM } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const records = {}
      action.payload.forEach(record => records[record.id] = record)
      return { ...state, ...records }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      const newState = state.delete(action.payload) // payload holds the id of action the stream
      return newState
    default:
      return state
  }
}
