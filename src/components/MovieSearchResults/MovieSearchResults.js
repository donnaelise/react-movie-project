import React, {useState, useEffect} from 'react';
import ResultCard from "../ResultCard/ResultCard";
import './MovieSearchResults.scss'
let ResultArr = [];

function MovieSearchResults(props) {
  const [result, setResult] = useState([]);
  const [TVresult, setTVResult] = useState([]);
  const [selection, setSelection] = useState('');

  useEffect(()=>{
    {
      if (props.searchFilter === 'tv') {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=b93d00f59612e64271c924d7c3cf8264&query=${props.searchquery}`)
            .then(response => response.json())
            .then(data => data.results)
            .then(resultsss => setTVResult(resultsss))
            .then(console.log('tv', TVresult))
            .then(TVresult.length > 0 ? console.log(TVresult.map(e => e.name)) : '')
            .catch(err => console.log('ERROR:', err))

      } else if (props.searchFilter === 'movie'){

      (fetch(`http://www.omdbapi.com/?s=${props.searchquery}&apikey=79b388a7`)
          .then(response => response.json())
          .then(data => data.Search)
          .then(result => setResult(result))
          .catch(err => console.log('ERROR:', err)))
    }
      
  }

  console.log(props.searchFilter)

}, [props.searchquery, props.searchFilter]
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