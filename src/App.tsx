import * as React from 'react';
import './App.css';
import { Movie, movieItem } from "./Movie";
import InfiniteScroll from 'react-infinite-scroller'

interface State {
  movies : movieItem[],
  page : number,
}
const INIT_STATE = {movies : [], page : 1}

class App extends React.Component<{}, State> {

  state = INIT_STATE

  _setMovies = async () => {
    console.log(`page : ${this.state.page}`)
    const rawMovie = await this._fetchMovies(this.state.page)
    console.log(rawMovie)
    const movies = rawMovie.map((rawMovie : any) => {
      const movie = { id :rawMovie.id, title : rawMovie.title, poster : rawMovie.large_cover_image, genres : rawMovie.genres, synopsis : rawMovie.synopsis }
      return movie
    })

    this.setState(prevState => {
      return {
        movies: prevState.movies.concat(movies),
        page: prevState.page + 1,
      }
    })
  }

  _fetchMovies = (page : number) => {
    return fetch(`https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=5&page=${page}`)
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
    return (
      <div className="App">
        <InfiniteScroll
            pageStart={0}
            loadMore={this._setMovies}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {this._renderMovies()}
        </InfiniteScroll>
      </div>
    )
  }
}

export default App;
