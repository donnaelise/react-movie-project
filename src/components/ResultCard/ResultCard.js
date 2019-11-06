import React, {useState, useEffect, useLayoutEffect} from 'react';
import ResultDetail from "../ResultDetail";
import './ResultCard.scss';
import ListSelectedInfo from "../ListSelectedInfo/ListSelectedInfo";
import $ from "jquery"


let Loaded = false;
var imagesLoaded = 0;
function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false);
  const [poster, setPoster] = useState('');
  const [position, setPosition] = useState('');
  const [isLoaded, setIsLoaded] = useState('');

  useEffect(()=>{
        setListPoster();
        console.log('use effect done')
      }, [result]
  );

  useLayoutEffect(()=>{
    // document.getElementById('listItem_'+result.id).addEventListener('load', console.log('div loaded'))
    // document.getElementById('img_'+result.id).addEventListener('load', console.log('img loaded'))
    console.log('use LAYOUT effect done')

  })


  function handleClick(val){
    setSelected(!selected);
    handleSelection(val);
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
    props.selection(val.id);
    document.getElementById('resultContainer').scrollTo(0, position)
    // window.scrollTo(0, position)
  }

  function ImgError(e){
    e.target.style.display="none";
  }


  $(document).ready(function() {
    imagesLoaded = 0;
    var totalImages = $('img').length;

    $('img').on('load', function(event) {
      imagesLoaded++;
      if (imagesLoaded == totalImages) {
        allImagesLoaded();
      }
    });

    function allImagesLoaded() {
      console.log('ALL IMAGES LOADED');
    }
  });

  function onLoad(e){
    const img=e.target;
    console.log(e.target, 'img was loaded');
    console.log(img.id)
    console.log($('#listItem_'+result.id).position());
    setIsLoaded($('#listItem_'+result.id).position().top);
    setPosition($('#listItem_'+result.id).position().top);
    console.log('state was set')
  }

  return(
      <React.Fragment>
        <li key={result.id} >
          <div className={'listItem'} id={'listItem_'+result.id} onClick={() => handleClick(result)}>
            {props.currentSelection === result.id && selected ?
                <div id={'ResultCardTitle--selected'} style={selectedStyle}> </div> :
                <div className={'ResultCard--expanded'}>
                  {/*<div className={'posterContainer listPoster'}> </div>*/}
                  {/*{document.getElementById('listItem_'+result.id)*/}
                  <img className={'listPoster'} id={'img_'+result.id} src={poster ? poster : 'http://via.placeholder.com/500x750/dedede/FFFFFF/?text=No%20Image'} onLoad={onLoad}  alt={'No poster available'} onError={ImgError}/>
                  <div className={'listInfo'}>
                    <h3>{result.name ? result.name : result.title}</h3>
                    <ListSelectedInfo selectedInfo={result} preview={true}/>
                    {/*{window.scrollTo(0,position)}*/}
                  </div>
                </div>
            }
          </div>
          {props.currentSelection === result.id && selected? <ResultDetail resultId={result.id} mediaType={props.mediaType} result={result}/>: ''}
        </li>
        {/*{  document.getElementById('listItem_'+result.id).addEventListener('load', console.log('clicked'))}*/}
      </React.Fragment>
  )
}
export default ResultCard;