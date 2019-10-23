import React, {useState, useEffect} from 'react';
import Trailer from "../Trailer";

function ResultDetail (props) {
  const id=props.resultId;
  const [result, setResult] = useState()

  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>setResult(data))
      }, [props.resultId]
  );

  return(
      <React.Fragment>

        {result?

            <div>
              <hr/>
              <p>IMDB ID is : {result.imdbID} !!!</p>
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
              <Trailer imdbID={result.imdbID}/>
            </div>

            :''}

      </React.Fragment>
  )
}
export default ResultDetail;