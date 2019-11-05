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


  return(
      <React.Fragment>
        <dl>
        { Object.keys(obj).map(function (prop) {
            if (typeof(prop) === 'string' && !prop.includes('path')) {

              if(props.preview){
                if(!exclude.includes(prop) && obj[prop]){
                  return obj[prop].length > 60 ? ' ' :
                      <div className={'ListSelectedDescription'}>
                        <dt>{transformText(prop)}</dt>
                        <dd>{obj[prop]}</dd>
                      </div>
                }
              }

              else if(!props.preview){
                return <div className={'ListSelectedDescription'}>
                  <dt>{transformText(prop)}</dt>
                  <dd>{obj[prop]}</dd>
                </div>
              }

            }
          })
        }
        </dl>
      </React.Fragment>
  )
}
export default ListSelectedInfo;