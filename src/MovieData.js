import React, {useState, useEffect} from 'react';

function MovieData(props) {
  const [result, setResult] = useState('');
  const [query, setQuery] = useState('')

  useEffect(()=>{
        console.log(props.searchquery);
        console.log(query);
        fetch(`http://www.omdbapi.com/?t=${props.searchquery}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>setResult(data))
      }, [query]
  );

  function Card(props){
    const {query = 'joker'} = props;
    return <h2>{query} </h2>
  }

  return(
      <React.Fragment>
        <button onClick={function (event) {
          event.preventDefault();
          setQuery(props.searchquery)}}>Find a movie </button>
        {result.Title ? <div>
          <p>Title: {result.Title}</p>
          <p>Year: {result.Year}</p>
          <img src={result.Poster} alt={'movie poster'}/>
        </div> : ''}
        <hr/>
      </React.Fragment>
  )
}
export default MovieData;