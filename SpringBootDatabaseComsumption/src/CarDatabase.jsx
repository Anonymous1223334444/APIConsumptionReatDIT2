function CarDatabase({ cars }) {
    return (
      <div className="container mt-4">
        {cars.map((car) => (
          <div className="card mb-3 shadow-sm" key={car.id}>
            <div className="card-body">
              <h4 className="card-title">
                {car.brand} - {car.model}
              </h4>
              <p className="card-text">
                <strong>Color:</strong> {car.color}
              </p>
              <p className="card-text">
                <strong>Register Number:</strong> {car.registerNumber}
              </p>
              <p className="card-text">
                <strong>Year:</strong> {car.year}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${car.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CarDatabase;
  