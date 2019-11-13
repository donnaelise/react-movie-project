import React, {useState, useEffect} from 'react';
import MediaResultCard from "../MediaResultCard";
import './MovieSearchResults.scss';
import $ from "jquery";


let ResultArr = [];
let newResultObj = {};
let tempResult = [];
let testObj;
let newResultArray = [];

function MovieSearchResults(props) {
  const [result, setResult] = useState([]);
  const [selection, setSelection] = useState('');
  const [newResult, setNewResult] = useState('');
  const [isLoading, setIsLoading] = useState('true');
  let filterList;
  const movieCardInfo = ['title', 'id', 'popularity', 'vote_average', 'vote_count', 'poster_path', 'overview', 'release_date'];
  const tvCardInfo = ['name', 'id', 'popularity', 'vote_average', 'vote_count', 'id', 'poster_path', 'overview', 'first_air_date'];
  const personCardInfo = ['name', 'id', 'popularity', 'gender', 'known_for_department', 'profile_path', 'known_for'];

  useEffect(()=>{
    setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/search/${props.searchFilter}?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&query=${props.searchquery}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => data.results)
            .then(result => setResult(result))
            .then(() => setIsLoading(false))
            .then(()=>setNewResult(newResultArray))
            .catch(err => console.log('ERROR:', err));


      }, [props.searchquery, props.searchFilter]
  );

  if(isLoading){
    $('.Loader').css('display','block');
    $('.listResults').css('display','none')
  }
  if(!isLoading){
    $('.Loader').css('display','none');
    $('.listResults').css('display','block')

  }

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
    return <MediaResultCard result={val} selection={handleSelection} currentSelection={selection} mediaType={props.searchFilter} nested={false}/>
  }

  return(
      <React.Fragment>
        <div className={'Loader'}>  </div>
        {displayData()}
        <ul className={'listResults'}>
          {newResult ? newResult.map(result=>
              <li key={result.id} id={'listItem_'+result.id}>
                {createDetailCard(result)}

              </li>
          ) : ''
          }
        </ul>
      </React.Fragment>
  )
}
export default MovieSearchResults;