import * as React from 'react';
import './App.css';
import { Movie } from "./Movie";

interface Movie {
  id : number,
  title : string,
  poster : string,
  genre : string[],
  synopsis : string,
}

interface State {
  movies : Movie[],
}

class App extends React.Component<{}, State> {
  componentDidMount(): void {
    this._fetchMovies()
  }

  _fetchMovies = () => {
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
        .then(res => res.json())
        .then(json => console.log(json))
  }


  render() {
    return (
      <div className="App">
        <Movie/>
      </div>
    );
  }
}

export default App;
