const getMovieData = (query = '', filter = 'movie') => (
    fetch(`https://api.themoviedb.org/3/search/${filter}?api_key=b93d00f59612e64271c924d7c3cf8264&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.json())
        .catch(err => console.log('ERROR:', err))
);

export default getMovieData