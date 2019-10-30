import React, {useState, useEffect} from 'react';

function Button (props) {
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&page=1`)
        .then(function(response) {if (response.ok){return response.json()}})
        .then(data=>setResults(data))
        .then(function(data){
          console.log(data.results);
          data.map(i=>console.log(data.results[i]));
          document.getElementsByClassName('App-header')[0].style.background='green';
        })
        .catch(e => console.log('Connection error', e))
  }, [latest]);

  return(
      <React.Fragment>
      </React.Fragment>
  )
}
export default LatestMovies;