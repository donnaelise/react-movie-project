import React, {useState, useEffect} from 'react';
import ResultCard from "../ResultCard/ResultCard";
import './MovieSearchResults.scss'
// import '../MovieSearch/MovieSearch.scss'
let ResultArr = [];

function MovieSearchResults(props) {
  const [result, setResult] = useState([]);
  const [selection, setSelection] = useState('');

  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?s=${props.searchquery}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>data.Search)
            .then(result=>setResult(result))
            .catch(err=>console.log(err))
      }, [props.searchquery]
  );

  function displayData() {
    ResultArr = [];
    if (result) {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          ResultArr.push(result[i]);
        }
      }
    }
  }

  function handleSelection(val){
    setSelection(val);
  }

  function createDetailCard(val){
    return <ResultCard result={val} selection={handleSelection} currentSelection={selection}/>
  }

  return(
      <React.Fragment>
        {displayData()}
        <hr/>
        <ul className={'listResults'}>
          {ResultArr.map(result=>
              <div key={result.imdbID} id={'listItem_'+result.imdbID}>
                {createDetailCard(result)}
              </div>
          )
          }
        </ul>
      </React.Fragment>
  )
}
export default MovieSearchResults;