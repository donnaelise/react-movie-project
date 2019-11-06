import React, {useState, useEffect} from 'react';
import $ from 'jquery';

function BackgroundImages (props) {
  const latest=props.latest
  // const latestMovies = [];
  // const latestPosters = [];
  const [results, setResults] = useState();
  let randomNum;

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&page=1`)
        .then(function(response) {if (response.ok){return response.json()}})
        .then(data=>setResults(data.results))
        .catch(e => console.log('Connection error', e))
  }, [latest]);

  function getRandomNum(){
    if (results){
      return randomNum = Math.floor(Math.random()*results.length)
    }
  }

  function setBackgroundImage(){
    const top     = `top`;
    const bottom  = `top calc(200vw)`;
    const v_center_top= `top calc(50vw)`;
    const v_center_center= `top calc(100vw)`;
    const v_center_bottom= `top calc(150vw)`;
    const left    = `left/calc(100%/3)`;
    const right   = `right/calc(100%/3)`;
    const h_center= `center/calc(100%/3)`;
    let LatestMoviesImages = [];
    let BackgroundImgs = [];
    if (results){
      results.map(function(e){
        LatestMoviesImages.push(e.poster_path)
      })
    }

    const horizontal = [left, right, h_center]
    const vertical = [top, v_center_top, v_center_center, v_center_bottom, bottom];

    let poster=0;
    for(let i = 0; i < 5 ; i ++) {
      for (let j = 0; j < 3; j++) {
        poster++;
        BackgroundImgs.push(`no-repeat ${vertical[i]} ${horizontal[j]} fixed url("http://image.tmdb.org/t/p/w500/${LatestMoviesImages[poster]}")`)
      }
      // BackgroundImgs.push(`linear-gradient(black, black)`)

    }

    BackgroundImgs = BackgroundImgs.toString();
    $('.App').css("background", BackgroundImgs);
    document.body.style.backgroundImage = "url=('http://image.tmdb.org/t/p/w185/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg')";
  }

  return(

      <React.Fragment>
        {/*{getRandomNum()}*/}
        {setBackgroundImage()}
      </React.Fragment>
  )
}
export default BackgroundImages;