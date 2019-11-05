import React, {useState, useEffect} from 'react';
import ResultDetail from "../ResultDetail";
import './ResultCard.scss';
import ListSelectedInfo from "../ListSelectedInfo";

function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false);
  const [poster, setPoster] = useState('')

  useEffect(()=>{
        setListPoster()
      }, [result]
  );

  function handleClick(val){
    setSelected(!selected);
    handleSelection(val);
    if(!selected){
      const scrollPoint = document.getElementById(`listItem_${val.id}`).offsetTop;
      window.scrollTo(0,scrollPoint)
    }
  }

  const selectedStyle = {
    backgroundImage: 'url(' + poster + ')',
    backgroundPositionY: '-40px',
    height:'160px',
    marginLeft:'0px',
    maxWidth:'100%',
    backgroundSize:'cover'
  };

  function setListPoster(){
    if(result.poster_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.poster_path}`)
    }
    else if(result.profile_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.profile_path}`)
    }
  }

  function handleSelection(val){
    props.selection(val.id)
  }

  function ImgError(e){
    e.target.style.display="none";
  }

  return(
      <React.Fragment>

        <li key={result.id} >
          <div className={'listItem'} id={'listItem_'+result.id} onClick={() => handleClick(result)}>

            {props.currentSelection === result.id && selected ?
                <div id={'ResultCardTitle--selected'} style={selectedStyle}> </div> :
                <div className={'ResultCard--expanded'}>
                  <img className={'listPoster'} src={poster} alt={'No image available'} onError={ImgError}/>
                  <div className={'listInfo'}>
                    <h3>{result.name ? result.name : result.title}</h3>
                    <ListSelectedInfo selectedInfo={result} preview={true}/>

                  </div>
                </div>
            }
          </div>
          {props.currentSelection === result.id && selected? <ResultDetail resultId={result.id} mediaType={props.mediaType} result={result}/>: ''}
        </li>
      </React.Fragment>
  )
}
export default ResultCard;