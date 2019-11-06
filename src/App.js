import React from 'react';
import './App.scss';
import MovieSearch from "./components/MovieSearch";
import BackgroundImages from "./components/BackgroundImages";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BackgroundImages latest={'latest'}/>
          <MovieSearch />
        </header>
      </div>
  )
}

export default App;


// style="background: url("http://image.tmdb.org/t/p/w500//vqzNJRH4YyquRiWxCCOH0aXggHI.jpg") left top / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg") right top / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg") center top / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg") left top calc(50vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//tximyCXMEnWIIyOy9STkOduUprG.jpg") right top calc(50vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg") center top calc(50vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg") left top calc(100vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//p69QzIBbN06aTYqRRiCOY1emNBh.jpg") right top calc(100vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg") center top calc(100vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//zfE0R94v1E8cuKAerbskfD3VfUt.jpg") left top calc(150vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//q5298SICFzqMcKtQoBktk8p6FH.jpg") right top calc(150vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//8u0QBGUbZcBW59VEAdmeFl9g98N.jpg") center top calc(150vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg") left top calc(200vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg") right top calc(200vw) / calc(33.3333%) no-repeat fixed, url("http://image.tmdb.org/t/p/w500//uaXNjRkDdjfxfVuKHo25wkA6CiA.jpg") center top calc(200vw) / calc(33.3333%) no-repeat fixed;", color:"red";