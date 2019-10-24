import React, {useState, useEffect} from 'react';

function Trailer (props) {
  const id=props.imdbID;
  const MDBid = props.imdbId;
  const [youTubeID, setYouTubeID] = useState();

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US`)
        .then(function(response) {if (response.ok){return response.json()}})
        // .then(json=>console.log(json))
        .then(function(data){
          if(data.results && data.results.length>0){
            if(data.results[0].key){
              setYouTubeID(data.results[0].key)
            }
          }
        })
        .catch(e => console.log('Connection error', e))
  }, [MDBid]);

  return(
      <React.Fragment>
        {youTubeID ?
            <div className="video" style={{position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 25, height: 0}}>
              <iframe onLoad={console.log('youtube video was loaded')}
                      style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                      src={`https://www.youtube.com/embed/${youTubeID}`}
                      frameBorder="0"
              />
            </div> : ''}
      </React.Fragment>
  )
}
export default Trailer;