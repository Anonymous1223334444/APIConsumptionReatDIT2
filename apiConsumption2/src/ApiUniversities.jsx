function Universities({ Universities_list }) {
    return (
      <div className="container">
        {Universities_list.map((university, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h4 className="card-title">{university.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">
                Website:&nbsp;
                <a
                href={university.web_pages[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {university.domains.join(", ")}
              </a>
              </h5>
              <p className="card-text">Location: {university.country}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Universities;
  