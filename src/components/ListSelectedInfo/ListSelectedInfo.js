import React from 'react';
import './ListSelectedInfo.scss'

function ListSelectedInfo (props) {
  const obj = props.selectedInfo;

  function transformText(str){
    str = str.replace(/_/g, ' ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str
  }

  const exclude = ['name', 'title', 'id', 'overview'];

  console.log();

  return(
      <React.Fragment>

        <dl className={'ListSelectedDescription'}>
          { Object.keys(obj).map(function (prop) {
            if (typeof(prop) === 'string' && !prop.includes('path') && prop !== 'known_for') {
              if(props.preview){
                if(!exclude.includes(prop) && obj[prop]){
                  return obj[prop].length > 60 ? ' ' :
                      <React.Fragment>
                        <dt>{transformText(prop)}</dt>
                        <dd>{obj[prop]}</dd>
                      </React.Fragment>
                }
              }

              else if(!props.preview){
                return <React.Fragment>
                  <dt>{transformText(prop)}</dt>
                  <dd>{obj[prop]}</dd>
                </React.Fragment>
              }
            }
          })
          }
        </dl>

      </React.Fragment>
  )
}
export default ListSelectedInfo;