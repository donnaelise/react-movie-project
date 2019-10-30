import React, {useState, useEffect} from 'react';
import './ResultDetail.scss'
import Trailer from "../Trailer/index";
import NYTimesReviews from "../NYTimesReviews";

function ResultDetail (props) {
  const id = props.resultId;
  const [result, setResult] = useState();

  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>setResult(data))
            .catch(()=>console.log('fetch failed'))
      }, [props.resultId]
  );

  function ImgError(){
    document.getElementById('ResultDetailImage').style.display = "none";
  }

  return(
      <React.Fragment>
        {result?
            <div className={'ResultDetailContainer'} id={`details_${result.imdbID}`}>
              <hr/>
              <div className={'movieSelected-info'}>
                {result.Poster ? <img id={'ResultDetailImage'} alt={'no img'} width={'50%'} src={result.Poster} onError={ImgError}/> : ''}
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
              <NYTimesReviews title={result.Title} />
              {result.Type === 'movie' ? <Trailer imdbID={result.imdbID}/> : ''}
            </div>
            :''}

      </React.Fragment>
  )
}
export default ResultDetail;