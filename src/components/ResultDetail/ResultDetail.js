import React, {useState, useEffect} from 'react';
import './ResultDetail.scss'
import Trailer from "../Trailer/index";
import NYTimesReviews from "../NYTimesReviews";
import ListSelectedInfo from "../ListSelectedInfo";

function ResultDetail (props) {
  const id = props.resultId;
  const [result, setResult] = useState(props.result);

  return(
      <React.Fragment>
        {result ?
            <div className={'ResultDetailContainer'} id={`details_${result.id}`}>
              <div className={'movieSelected-info'}>
                <h2>{result.name ? result.name : result.title}</h2>
                <ListSelectedInfo selectedInfo={result} preview={false}/>
              </div>
              <dl>
              </dl>
              <NYTimesReviews title={result.title ? result.title : result.name} />
              {props.mediaType === 'movie' ? <Trailer imdbID={result.id}/> : ''}
            </div>
            :''}

      </React.Fragment>
  )
}
export default ResultDetail;