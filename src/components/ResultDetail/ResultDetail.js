import React, {useState, useEffect, useLayoutEffect} from 'react';
import '../ResultCard/ResultCard.scss'
import Trailer from "../Trailer/index";
import NYTimesReviews from "../NYTimesReviews";
import ListSelectedInfo from "../ListSelectedInfo/ListSelectedInfo";
import $ from "jquery";
import _ResultCard from "../_ResultCard";

function ResultDetail (props) {
  const [result, setResult] = useState(props.result);
  const known_for_movies = props.result.known_for

  useEffect(()=>{
getKnownFor();
    // if(known_for_movies && known_for_movies.length>0) {
    //   known_for_movies.map(e=>console.log(e, '2'))
    // }
  });


  function getKnownFor(){
    if(known_for_movies && known_for_movies.length>0) {
      known_for_movies.map(function(movie){
        console.log(movie);
        if(movie.id){
          console.log(movie.id)
          return <_ResultCard result={result} currentSelection={movie.id} nested={true}/>
        }
      })
    }
  }
  function getAllPositions(){
    console.log($('#listItem_'+result.id))
  }

  const arr = [result, result, result]
  console.log(result.id);
  getAllPositions();
  return(
      <React.Fragment>
        {result ?
            <div className={`ResultDetailContainer nested--${props.nested}`} id={`details_${result.id}`}>
              <div className={'movieSelected-info'}>
                <h2>{result.name ? result.name : result.title}</h2>
                <ListSelectedInfo selectedInfo={result} preview={false}/>
                {props.mediaType === 'person' ? console.log(props.result.known_for) : ''}
                {console.log('15', result)}

                {getKnownFor()}

              </div>
              {/*{!props.nested ? <_ResultCard result={result} currentSelection={result.id} nested={true}/> : ''}*/}
              {!props.nested && known_for_movies &&  known_for_movies.length>0 ? known_for_movies.map(e=><_ResultCard result={e} currentSelection={result.id} nested={true}/>) : ''}

              {props.mediaType === 'movie' ? <Trailer imdbID={result.id}/> : ''}
            </div>
            :''}
        {/*{known_for_ids_detail.map(e=>console.log(e.id))}*/}
      </React.Fragment>
  )
}
export default ResultDetail;


