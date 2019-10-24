import React, {useState, useEffect} from 'react';

function MovieSelected(props) {
  // const [imdbID, setImdbID] = useState(props.id);
  const [result, setResult] = useState([]);

  useEffect(()=>{
        console.log(props.id);
        fetch(`http://www.omdbapi.com/?i=${props.id}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>setResult(data))
      }, [props.id]
  );

  function handleClearSelection(e){
    e.preventDefault();
    props.close()
  }

  return(
      <div className={'movieSelected'}>
        <hr/>
        <h3 className={'movieSelected-title'}>{result.Title}</h3>
        <div className={'movieSelected-info'}>
          {result.Poster ? <img alt={'no img'} width={'50%'} src={result.Poster} /> : ''}
          <dl>
            <dt>Year:</dt><dd> {result.Year}</dd>
            <dt>Genre:</dt><dd> {result.Genre}</dd>
            <dt>Rating:</dt><dd> {result.imdbRating}</dd>
            <dt>Actors:</dt><dd> {result.Actors}</dd>
          </dl>
        </div>
        <dl>
          <dt>Plot:</dt><dd> {result.Plot}</dd>
        </dl>
        <button onClick={handleClearSelection}>Close</button>
      </div>
  )
}
export default MovieSelected;