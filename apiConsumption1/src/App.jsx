import './App.css';
import Movies from './Apimovies';
import React from 'react';

function App() {
  const [title, setTitle] = React.useState("");
  const [films, setFilm] = React.useState([]);
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
      fetch("https://reactnative.dev/movies.json")
      .then(response => response.json())
      .then(jsonresult => {
          setTitle(jsonresult.title);
          setFilm(jsonresult.movies);
          setReady(true);
      })
      .catch(err => console.error(err));
  }, []);
  if (isReady) {
      return (
      <div className="App">
          <h1 className="bg-dark text-white text-center display-3">
          Title: {title}
          </h1>
          <Movies movie_list={films} />
      </div>
      );
  } else {
      return <div>Loading...</div>;
  }
}

export default App
