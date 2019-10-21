import React, {useState, useEffect} from 'react';

function MovieData() {
  const movieList = ["Breaking Bad",
    "The Good, the Bad and the Ugly",
    "Bad Boys",
    "Bad Boys II",
    "Bad Teacher",
    "Bad Santa",
    "Bad Moms",
    "Bad Times at the El Royale",
    "Bad Grandpa",
    "El Camino: A Breaking Bad Movie",]
  const [result, setResult] = useState('');
  const [number, setNumber] = useState(1)
  const [query, setQuery] = useState(1)


  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?t=${query}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>setResult(data))
      }, [query]
  )

  function Card(props){
    const {query = 'joker'} = props;
    console.log(props.query)
    console.log(query)
    return <h2>{query} </h2>
  }

  function getRandomNum(){
    setNumber(Math.floor(Math.random()*movieList.length))
  }

console.log(query)
  return(

      <React.Fragment>
        <input type={'text'} placeholder={'dataaaaaa'} height={160} onChange={e=>setQuery(e.target.value)}/>
        {/*<button onClick={function(event){*/}
        {/*  event.preventDefault();*/}
        {/*  getRandomNum();*/}
        {/*  console.log(number, movieList[number])*/}
        {/*}}> CLICK ME TO FETCH </button>*/}
        <hr/>
        <p>Title: {result.title}</p>
        <p>Year: {result.Year}</p>
        <img src={result.Poster} />
        <hr/>
      </React.Fragment>
  )
}
export default MovieData;