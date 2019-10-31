import React, {useState} from 'react';
import ResultDetail from "../ResultDetail";
import './ResultCard.scss';

function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false);

  function handleClick(val){
    setSelected(!selected);
    handleSelection(val);
    if(!selected){
      const scrollPoint = document.getElementById(`listItem_${val.imdbID}`).offsetTop;
      window.scrollTo(0,scrollPoint)
    }
  }

  const selectedStyle = {
    backgroundImage: 'url(' + result.Poster + ')',
    backgroundPositionY: '-40px',
    height:'160px',
    marginLeft:'0px',
    maxWidth:'100%'
  };

  function handleSelection(val){
    props.selection(val.imdbID)
  }

  function ImgError(e){
    e.target.style.display="none";
  }

  return(
      <li key={result.imdbID} >
        <div className={'listItem'} id={'listItem_'+result.imdbID} onClick={() => handleClick(result)}>
          {props.currentSelection === result.imdbID && selected ? <div id={'ResultCardTitle--selected'} style={selectedStyle}> </div> :
             <div className={'ResultCard--expanded'}>
               {result.Poster.length !=="N/A" ? <img className={'listPoster'} src={result.Poster} alt={'No image available'} onError={ImgError}/> : ''}
               <div className={'listInfo'}>
                 <h3>Title: {result.Title}</h3>
                 Type: {result.Type}<br/>
                 Year: {result.Year}
               </div>
             </div>
              }
        </div>

        {props.currentSelection === result.imdbID && selected? <ResultDetail resultId={result.imdbID} />: ''}



        {/*{result.imdbID ? window.scrollTo(0,(document.getElementById('details_'+result.imdbID).offsetTop)) : ''}*/}

      </li>
  )
}
export default ResultCard;