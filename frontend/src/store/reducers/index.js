import {
  FETCH_QUOTE,
  FAV_QUOTE,
  ADD_QUOTE
} from '../actions'

const initialState = {
  quote : '',
  favouriteQuote : [],
  myQuote: []
}

const reducers = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case FETCH_QUOTE : return {...state, quote: payload }
    case FAV_QUOTE : return { ...state, favouriteQuote: state.favouriteQuote.concat(payload)}
    case ADD_QUOTE : return { ...state, myQuote: state.myQuote.concat(payload)}
    default: return state
  }
}

export default reducers