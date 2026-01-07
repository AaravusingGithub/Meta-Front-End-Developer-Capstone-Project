import { Link, useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  // Generate 4-digit random code
  const confirmationCode = Math.floor(1000 + Math.random() * 9000);

  return (
    <section className="confirm-page">
      <div className="confirm-card">
        <div className="checkmark">✓</div>
        <h2>Reservation Confirmed!</h2>
        <p>
          Thank you, <strong>{name}</strong>! Your table at{" "}
          <strong>Little Lemon</strong> has been successfully booked.
        </p>
        <p>
          Please bring this 4-digit code to the restaurant to confirm your booking:
        </p>
        <h3 style={{ letterSpacing: "3px", fontSize: "1.5rem", margin: "1rem 0" }}>
          {confirmationCode}
        </h3>

        <Link to="/" className="confirm-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
