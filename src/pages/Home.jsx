import { Link } from "react-router-dom";
import restaurantBg from "../assets/restaurant.png";

export default function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${restaurantBg})`
      }}
    >
      <div className="hero-content">
        <h2>Welcome to Little Lemon</h2>
        <p>
          Reserve a table for an unforgettable Mediterranean dining experience.
        </p>
        <Link to="/booking" className="hero-btn">
          Reserve a Table
        </Link>
      </div>
    </section>
  );
}
