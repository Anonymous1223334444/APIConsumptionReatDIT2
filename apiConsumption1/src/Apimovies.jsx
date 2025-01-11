function Movies({ movie_list }) {
    return (
        <div className="card">
        {movie_list.map(movie => (
            <div className="card" key={movie.id}>
            <div className="card-body">
                <h4 className="card-title">{movie.id}</h4>
                <h3 className="card-subtitle mb-2 text-muted">
                {movie.title}
                </h3>
                <h5 className="card-text">{movie.releaseYear}</h5>
            </div>
            </div>
        ))}
        </div>
    );
}

export default Movies;
