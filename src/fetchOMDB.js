import React from 'react';
import MovieResultCard from "./MovieResultCard";
let results = [];
let dataState;

let listResults = [];

class FetchMovieData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
        this.delta=this.delta.bind(this);
    }


    delta = (val) => {
        this.setState({data:val})
    }



    fetchMovie(){
        fetch(`https://www.omdbapi.com/?apikey=79b388a7&s=love`)
            .then(response => response.json())
            .then(json=>results = json.Search.map(t=>({title: t.Title, year:t.Year})))
            .then(()=>this.delta(results))
    }

    render() {
        dataState = this.state.data;

        {if(dataState.length > 0){
            for(let i = 0; i < dataState.length; i++){
                listResults.push(<MovieResultCard title={dataState[i].title}/>)
            }
            console.log(listResults)
        }}

this.fetchMovie()
        return(

            <React.Fragment>
                {dataState.length > 0 ? dataState[0].title :''}
                {listResults}
                {/*{dataState.map(e=><MovieResultCard title={this.state.data[e].title} />)}*/}
            </React.Fragment>
        )
    }
}

export default FetchMovieData;