
import React from "react";

function CarCard({ name, image, price, year, type }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} />

      <div className="car-info">
        <p className="car-type">{type}</p>
        <h3>{name}</h3>
        <p className="car-year">Model: {year}</p>

        <div className="car-bottom">
          <h4>{price}</h4>
          <a href="#contact">View Details →</a>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
