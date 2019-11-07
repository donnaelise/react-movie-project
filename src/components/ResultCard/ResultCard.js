import React, {useState, useEffect, useLayoutEffect} from 'react';
import ResultDetail from "../ResultDetail";
import './ResultCard.scss';
import ListSelectedInfo from "../ListSelectedInfo/ListSelectedInfo";
import $ from "jquery"

function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false);
  const [poster, setPoster] = useState('');
  // const [position, setPosition] = useState('');


  useEffect(()=>{
        setListPoster();
        window.scrollTo($('#listItem_'+props.currentSelection).position())
      }, [result, selected]
  );

  function handleClick(val){
    console.log('clicked');
    handleSelection(val);

    if(selected) {
      setSelected(false)
    } else if (!selected) {
      setSelected(true)
    }
  }

  const selectedStyle = {
    backgroundImage: 'url(' + poster + ')',
    backgroundPositionY: '-40px',
    height:'160px',
    marginLeft:'0px',
    maxWidth:'100%',
    backgroundSize:'cover'
  }

  function setListPoster(){
    if(result.poster_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.poster_path}`)
    }
    else if(result.profile_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.profile_path}`)
    }
  }

  function handleSelection(val){
    props.selection(val.id);
  }

  function ImgError(e){
    e.target.style.display="none";
  }

  function onLoad(){
    // setPosition($('#listItem_'+result.id).position().top);
  }

  return(
      <React.Fragment>
          <div className={'listItem'} id={'listItem_'+result.id} onClick={() => handleClick(result)}>
            {props.currentSelection === result.id && selected ?
                <div id={'ResultCardTitle--selected'} style={selectedStyle}> </div> :
                <div className={'ResultCard'}>
                  <div className={'imageContainer'}>
                    <img className={'listPoster'} id={'img_'+result.id} src={poster ? poster : 'http://via.placeholder.com/500x750/dedede/FFFFFF/?text=No%20Image'} onLoad={onLoad}  alt={'No poster available'} onError={ImgError}/>
                  </div>
                  <div className={'listInfo'}>
                    <h3>{result.name ? result.name : result.title}</h3>
                    <ListSelectedInfo selectedInfo={result} preview={true}/>
                  </div>
                </div>
            }
          </div>
          {props.currentSelection === result.id && selected? <ResultDetail resultId={result.id} mediaType={props.mediaType} result={result}/>: ''}
      </React.Fragment>
  )
}
export default ResultCard;