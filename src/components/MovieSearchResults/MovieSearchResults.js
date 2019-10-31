import React, {useState, useEffect} from 'react';
import ResultCard from "../ResultCard/ResultCard";
import './MovieSearchResults.scss'
let ResultArr = [];

function MovieSearchResults(props) {
  const [result, setResult] = useState([]);
  const [selection, setSelection] = useState('');

  useEffect(()=>{
fetch(`https://api.themoviedb.org/3/search/${props.searchFilter}?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&query=${props.searchquery}&page=1&include_adult=false`)
        // fetch(`https://api.themoviedb.org/3/search/multi?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&page=1&include_adult=false&query=${props.searchquery}`)
            .then(response => response.json())
            .then(data => data.results)
            .then(results => setResult(results))
            .catch(err => console.log('ERROR:', err));
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
    // return <ResultCard result={val} selection={handleSelection} currentSelection={selection}/>
  }

  return(

      <React.Fragment>
        {result ? console.log(result) :''}
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




// useEffect(()=>{
//
//       fetch(`https://api.themoviedb.org/3/search/multi?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&page=1&include_adult=false&query=${props.searchquery}`)
//           .then(response => response.json())
//           .then(data => data.results)
//           .then(results => setResult(results))
//           .then(result ? result.map(e=> e.media_type === props.searchFilter ? mediaTypeResult.push(e) : '') : '')
//           .then(setFilteredResults(mediaTypeResult))
//           .catch(err => console.log('ERROR:', err));
//
//     }, [props.searchquery, props.searchFilter]
// );
