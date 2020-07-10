import axios from 'axios'
const url = 'https://api.kanye.rest/'

export const FETCH_QUOTE = 'FETCH_QUOTE'
export const FAV_QUOTE = 'FAV_QUOTE'
export const ADD_QUOTE = 'ADD_QUOTE'

export const fetchQuoteData = (data) => {
  return {
    type: FETCH_QUOTE,
    payload: data
  }
}

export const favQuote = (data) => {
  return {
    type: FAV_QUOTE,
    payload: data
  }
}

export const addQuote = (data) => {
  return {
    type: ADD_QUOTE,
    payload: data
  }
}

export const getQuoteData = () => {
  return (dispatch) => {
    axios.get(url)
    .then(({data}) => {
      console.log(data)
      dispatch(fetchQuoteData(data.quote))
    })
    .catch(err => {
      console.log(err)
    })
  }
}