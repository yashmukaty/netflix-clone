function Detail(props){
    const {movie,onDetailClosed} = props;

    return(
        <div className="detail">
            <div className="detail__image" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                <span className="detail__title">
                    {movie.original_name}
                </span>
            </div>
            <div className="banner--fadeBottom detail__fade-image"></div>
            <div className="detail__actions">
                <button className="detail__btn mgr-8">Play</button>
                <button className="detail__btn" onClick={onDetailClosed}>Back</button>
            </div>
            <div className="detail__description">
                <div className="detail__description-title">Description</div>
                <p className="detail__description-content">
                    {movie.overview}
                </p>
            </div>

        </div>
    );
}

export default Detail;