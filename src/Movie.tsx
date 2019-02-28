import * as React from 'react'

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
                <div className="movieTitle">
                    <h1>{title}</h1>
                </div>
                <div className="movieGenres">
                    {genres.map((genre : string, index : number) => {
                        return (
                            <MovieGenre key={index} genre={genre}/>
                        )
                    } )}
                </div>
                <div className="movieSynopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

const MoviePoster : React.FC<{title : string, poster : string}> = (props) => {
    const { title, poster } = props
    return (
            <img src={poster} alt={title} title={title} />
    )
}

const MovieGenre : React.FC<{genre : string}> = (props) => {
    const { genre } = props
    return (
        <span className="movieGenre">{genre}</span>
    )
}