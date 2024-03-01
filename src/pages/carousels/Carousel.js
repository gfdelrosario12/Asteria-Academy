import React from "react";

function Carousel({ images, id }) {
  return (
    <div className="container mt-4"> {/* Add margin-top class here */}
      <div className="row">
        <div className="col">
          <div id={`carouselExample-${id}`} className="carousel slide">
            <div className="carousel-inner">
              {images.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item.src} className="d-block w-100" alt={item.alt} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExample-${id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExample-${id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
