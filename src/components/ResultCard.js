import React, {useState} from 'react';
import ResultDetail from "./Form/ResultDetail";
// import Trailer from "./Trailer";

function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false)


  function handleClick(val){
    setSelected(!selected);
    handleSelection(val)
  }

  function handleSelection(val){
    props.selection(val.imdbID)
  }

  return(
  <li key={result.imdbID} >
    <div className={'listItem'} id={'listItem_'+result.imdbID} onClick={() => handleClick(result)}>
    <img className={'listPoster'} src={result.Poster} alt={'no poster available'}/>
    <div className={'listInfo'}>
      Title: {result.Title} <br/>
      Year: {result.Year}

    </div>
    </div>
    {props.currentSelection === result.imdbID && selected? <ResultDetail resultId={result.imdbID} />: ''}
  </li>



)
}
export default ResultCard;