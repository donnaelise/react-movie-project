import React, {useState, useEffect} from 'react';
import './NYTimesReviews.scss';

function NYTimesReviews (props) {
  const title = props.title;
  const [link, setLink] = useState();

  useEffect(()=>{
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=ztBm42P6gWwA3gKU2ZXTPMP9ad8WGUrH`)
            .then(response => response.json())
            .then(function(data){
                  if(data.results){
                    setLink(data.results[0]);
                  }
                }
            )
            .catch(()=>console.log('fetch failed'))
      }, [props.title]
  );

  return(
      <React.Fragment>
        {link ?
            <div className={'resultReview'}>
              <hr/>
              <h3>{link.link.suggested_link_text}</h3>
              <a href={link.link.url} target={'_blank'}>
                <p className={'reviewHeadline'}>
                  <b>{link.headline}</b>
                  <br/>by <i>{link.byline} </i>
                </p>
              </a>
            </div> : ''}

        {/*<p>{linkText.suggested_link_text}</p>*/}
      </React.Fragment>
  )
}
export default NYTimesReviews;