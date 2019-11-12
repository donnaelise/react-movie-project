import React from 'react';
import Trailer from "../Trailer/index";
import NYTimesReviews from "../NYTimesReviews";
import ListSelectedInfo from "../ListSelectedInfo";
import MediaResultCard from "../MediaResultCard";
import '../MediaResultCard/MediaResultCard.scss'
import './ResultDetail.scss'

function ResultDetail (props) {
  const result = props.result;
  const known_for_movies = props.result.known_for;

  return(
      <React.Fragment>
        {result ?
            <div className={`ResultDetailContainer nested--${props.nested}`} id={`details_${result.id}`}>
              <div className={'movieSelected-info'}>
                <img alt={""} className={'profileImg'} src={props.poster} />
                <ListSelectedInfo selectedInfo={result} preview={false}/>
                {props.mediaType === 'person' ? console.log(props.result.known_for) : ''}
              </div>
              {!props.nested && known_for_movies && known_for_movies.length > 0 ?
                  <React.Fragment>
                    <h3>Known For: </h3>
                    {known_for_movies.map( e => <MediaResultCard result={e} currentSelection={result.id} nested={true}/>) }
                  </React.Fragment>
                  : ''}
              <NYTimesReviews title={result.title ? result.title : result.name} />
              <Trailer imdbID={result.id}/>
            </div>
            :''}
      </React.Fragment>
  )
}
export default ResultDetail;