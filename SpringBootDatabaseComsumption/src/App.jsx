import { useState, useEffect } from "react";
import CarDatabase from "./CarDatabase";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/cars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 className="bg-dark text-white text-center display-3">Car Database</h1>
      <CarDatabase cars={cars} />
    </div>
  );
}

export default App;
