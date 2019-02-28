import * as React from 'react';
import './App.css';
import { Movie, movieItem } from "./Movie";
import InfiniteScroll from 'react-infinite-scroller'

interface State {
  movies : movieItem[],
}
const INIT_STATE = {movies : []}

class App extends React.Component<{}, State> {

  state = INIT_STATE

  componentDidMount(): void {
    this._setMovies()
  }

  _setMovies = async () => {
    const rawMovie = await this._fetchMovies()
    const movies = rawMovie.map((rawMovie : any) => {
      const movie = { id :rawMovie.id, title : rawMovie.title, poster : rawMovie.large_cover_image, genres : rawMovie.genres, synopsis : rawMovie.synopsis }
      return movie
    })

    this.setState({
      movies
    })
  }

  _fetchMovies = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
        .then(res => res.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie : movieItem) => {
      return (
          <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              genres={movie.genres}
              synopsis={movie.synopsis}
          />
      )
    })
    return movies
  }

  render () {
    const { movies } = this.state
    return (
      <div className="App">
        {movies ? this._renderMovies() : "Loading"}
        {/*<InfiniteScroll*/}
            {/*pageStart={0}*/}
            {/*loadMore={"D"}*/}
            {/*hasMore={true || false}*/}
            {/*loader={<div className="loader" key={0}>Loading ...</div>}*/}
        {/*>*/}
          {/*{null}*/}
        {/*</InfiniteScroll>*/}
      </div>
    )
  }
}

export default App;
