import * as React from 'react'

interface Props {


}

export const Movie : React.FC<Props> = (props) => {
    return (
        <div className="movie">
            <div className="movieTitle">
                movieTitle
            </div>
            <div className="moviePoster">
                moviePoster
            </div>
            <div className="moviegenre">
                movieGenre
            </div>
            <div className="movieSynopsis">
                movieSynopsis
            </div>
        </div>
    )
}
