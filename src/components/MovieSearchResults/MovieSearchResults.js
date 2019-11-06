import React, {useState, useEffect, useLayoutEffect} from 'react';
import ResultCard from "../ResultCard/ResultCard";
import './MovieSearchResults.scss'
// import ListSelectedInfo from "../ListSelectedInfo/ListSelectedInfo";

let ResultArr = [];
let newResultObj = {};
let tempResult = [];
let testObj;

let newResultArray = [];

function MovieSearchResults(props) {
  const [result, setResult] = useState([]);
  const [selection, setSelection] = useState('');
  const [newResult, setNewResult] = useState('');

  let filterList;

  const movieCardInfo = ['title', 'id', 'popularity', 'vote_average', 'vote_count', 'poster_path', 'overview', 'release_date'];
  const tvCardInfo = ['name', 'id', 'popularity', 'vote_average', 'vote_count', 'id', 'poster_path', 'overview', 'first_air_date'];
  const personCardInfo = ['name', 'id', 'popularity', 'known_for_department', 'profile_path'];

  useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/search/${props.searchFilter}?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&query=${props.searchquery}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => data.results)
            .then(result => setResult(result))
            .then(()=>setNewResult(newResultArray))
            .catch(err => console.log('ERROR:', err));

      }, [props.searchquery, props.searchFilter]
  );

  useLayoutEffect(()=>{

          console.log('----------------layout from moviesearchresult  fininshed----------------')

      }
  );

  if(props.searchFilter === 'tv') {
    filterList = tvCardInfo;
  }
  else if(props.searchFilter === 'movie') {
    filterList = movieCardInfo;
  }
  else if(props.searchFilter === 'person') {
    filterList = personCardInfo;
  }

  newResultArray = [];
  for(let i = 0; i < result.length;i++){
    filterList.map(property=>
      tempResult.push({[property]: result[i][property]})
    );
    tempResult.map(j => Object.assign(newResultObj , (j)));

    testObj=(filterList.map(
        function(prop){
          return {[prop]: newResultObj[prop]}
        }
    ));

    newResultArray.push({
      ...testObj[0],
      ...testObj[1],
      ...testObj[2],
      ...testObj[3],
      ...testObj[4],
      ...testObj[5],
      ...testObj[6],
      ...testObj[7]
    })
  }


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
    return <ResultCard result={val} selection={handleSelection} currentSelection={selection} mediaType={props.searchFilter} infoSelection={newResult}/>
  }
  return(
      <React.Fragment>
        {displayData()}
        <ul className={'listResults'}>
          {newResult ? newResult.map(result=>
              <div key={result.id} id={'listItem_'+result.id}>
                {createDetailCard(result)}
              </div>
          ) : ''
          }
        </ul>
      </React.Fragment>
  )
}
export default MovieSearchResults;