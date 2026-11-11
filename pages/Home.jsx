
import React from "react";
import CarCard from "../components/CarCard";

function Home() {
  const cars = [
    {
      name: "Mercedes Benz",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      price: "Rs. 2.5 Crore",
      year: "2024",
      type: "Luxury Sedan"
    },
    {
      name: "BMW 5 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      price: "Rs. 2 Crore",
      year: "2024",
      type: "Premium Sedan"
    },
    {
      name: "Porsche 911",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      price: "Rs. 8 Crore",
      year: "2025",
      type: "Sports Car"
    },
    {
      name: "Toyota Land Cruiser",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
      price: "Rs. 9 Crore",
      year: "2024",
      type: "Luxury SUV"
    }
  ];

  return (
    <>
      <section className="featured" id="cars">
        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Featured <span>Cars</span></h2>
          <p>Explore our exclusive collection of luxury vehicles.</p>
        </div>

        <div className="car-grid">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              image={car.image}
              price={car.price}
              year={car.year}
              type={car.type}
            />
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p>ABOUT AUTO LUX</p>
        <h2>Experience The Luxury</h2>
        <p>
          We help you discover premium vehicles
          with style, comfort and performance.
        </p>
      </section>
    </>
  );
}

export default Home;
