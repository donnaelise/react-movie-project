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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const [number, setNumber] = useState(1)


  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?t=${movieList[number]}&apikey=79b388a7`)
            .then(response => response.json())
      }, [number]
  )


  function getRandomNum(){
    setNumber(Math.floor(Math.random()*movieList.length))
  }



  return(
      <React.Fragment>
        <button onClick={function(event){
          event.preventDefault();
          getRandomNum();
          console.log(number, movieList[number])
        }}> CLICK ME TO FETCH </button>
        <hr/>
        <p>Title: {movieList[number]}</p>
        <p>Year: {result.Year}</p>
        <img src={result.Poster} />
        <hr/>
      </React.Fragment>
  )
}
export default MovieData;