import * as React from 'react'
import Truncate from 'react-truncate';
import './Movie.css'

export interface movieItem {
    id : number,
    title : string,
    poster : string,
    genres : string[],
    synopsis : string,
}

export const Movie : React.FC<movieItem> = (props) => {
    const { title, poster, genres, synopsis } = props
    return (
        <div className="movie">
            <div className="movieColumn">
                <MoviePoster title={title} poster={poster}/>
            </div>
            <div className="movieColumn">
                <h1>{title}</h1>
                <div className="movieGenres">
                    {genres.map((genre : string, index : number) => {
                        return (
                            <MovieGenre key={index} genre={genre}/>
                        )
                    } )}
                </div>
                <div className="movieSynopsis">
                    <Truncate lines={3} ellipsis={<span>...</span>} trimWhitespace>
                        {synopsis}
                    </Truncate>
                </div>
            </div>
        </div>
    )
}

const MoviePoster : React.FC<{title : string, poster : string}> = (props) => {
    const { title, poster } = props
    return (
            <img className="moviePoster" src={poster} alt={title} title={title} />
    )
}

const MovieGenre : React.FC<{genre : string}> = (props) => {
    const { genre } = props
    return (
        <span className="movieGenre">{genre}</span>
    )
}