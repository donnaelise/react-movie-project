import React, {useState, useEffect} from 'react';

function Trailer (props) {
  const url=props.result;
  const id=props.imdbID;
  // const [result, setResult] = useState()
  // const [MDBid, setMDBid] = useState()
  const [youTubeID, setYouTubeID] = useState()

  useEffect(()=>{
    console.log(props)
    // fetch(`https://api.themoviedb.org/3/find/${id}?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&external_source=imdb_id`)
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US`)
        .then(response => response.json())
        .then(function(data){
          if(data.results && data.results.length>0){
            if(data.results[0].key){
              console.log(data.results[0].key);
              setYouTubeID(data.results[0].key)
            }
          }
        })
        .then(()=>console.log(youTubeID))
  }, [props.imdbId]
);

return(
    <React.Fragment>
      {youTubeID ?
      <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
      >
        <iframe onload={console.log('LOADED')}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/${youTubeID}`}
            frameBorder="0"
        />
      </div> : ''}
    </React.Fragment>
)
}
export default Trailer;