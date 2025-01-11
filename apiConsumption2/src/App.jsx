import './App.css';
import Universities from './ApiUniversities';
import React from 'react';

function App() {
  const [universities, setUniversities] = React.useState([]); 
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Senegal")
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data); 
        setReady(true); 
      })
      .catch((err) => console.error(err));
  }, []);

  if (isReady) {
    return (
      <div className="App">
        <h1 className="bg-dark text-white text-center display-3">
          Universities in Senegal
        </h1>
        <Universities Universities_list={universities} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
