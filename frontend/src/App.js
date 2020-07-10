import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getQuoteData, favQuote, addQuote } from './store/actions'
import './App.css';

function App() {
  const dispatch = useDispatch()
  const [newQuote, setNewQuote] = useState('')
  const quote = useSelector((state) => state.quote)
  const myQuote = useSelector((state) => state.myQuote)
  const favouriteQuote = useSelector((state) => state.favouriteQuote)

  const getNewQuote = (e) => {
    e.preventDefault()
    dispatch(getQuoteData())
  }

  const createQuote = (e) => {
    e.preventDefault()
    dispatch(addQuote(newQuote))
    setNewQuote('')
  }

  const saveQuote = (e) => {
    e.preventDefault()
    console.log(quote)
    if(favouriteQuote.length === 0) {
      dispatch(favQuote(quote))
    } else {
      if(favouriteQuote[favouriteQuote.length-1] !== quote) {
        dispatch(favQuote(quote))
      }
    }
  }

  useEffect(() => {
    dispatch(getQuoteData())
  }, [dispatch] )
  return (
    <div className="App">
    <div style={{background: 'darkslategrey', minHeight: 300, height: 'fit-content'}}>
      <h1>Kanye-West Quote</h1>
      <div>
        <h3>{JSON.stringify(quote)}</h3>
        <button onClick={e => getNewQuote(e)} >Refresh Quote</button><br/>
        <button onClick={e => saveQuote(e)} >Save Quote</button>
      </div>
      { favouriteQuote.length > 0 &&
        favouriteQuote.map((quote,i) => {
          return <h6 key={i}>{i+1}. {quote}</h6>
        })
      }
    </div>
      <div style={{background: 'grey', minHeight: 300, height: 'fit-content'}}>
        <form onSubmit={createQuote}>
         <input type="text" placeholder="input quote" 
         value={newQuote} 
         onChange={e=> setNewQuote(e.target.value)} />
         <input type="submit" value="submit"/>
        </form>
      { myQuote.length > 0 &&
        myQuote.map((myquote,i) => {
          return <h5 key={i}>{i+1}.{myquote}</h5>
        })

      }
      </div>
    </div>
  );
}

export default App;
