import * as React from 'react'

export interface movieItem {
    id : number,
    title : string,
    poster : string,
    genres : string[],
    synopsis : string,
}

export const Movie : React.FC<movieItem> = (props) => {
    return (
        <div className="movie">
            <div className="movieTitle">
                movieTitle
            </div>
            <div className="moviePoster">
                moviePoster
            </div>
            <div className="movieGenre">
                movieGenre
            </div>
            <div className="movieSynopsis">
                movieSynopsis
            </div>
        </div>
    )
}
