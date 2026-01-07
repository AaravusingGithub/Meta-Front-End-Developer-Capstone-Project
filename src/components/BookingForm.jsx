import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [error, setError] = useState(""); // For validation messages

  const occasions = [
    "Birthday",
    "Anniversary",
    "Date Night",
    "Family Dinner",
    "Business Meeting",
    "Celebration",
    "Other",
  ];

  const isValid =
    formData.name.trim() !== "" &&
    formData.date &&
    formData.time &&
    formData.guests >= 1 &&
    formData.guests <= 10;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "date") {
      dispatch({ date: value });
      setError(""); // Reset error on change
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(formData.date);

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      setError("Please select a valid future date.");
      return;
    }

    submitForm(formData);
  }

  // Get today's date for the calendar min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} aria-label="Table booking form">
      <h3 className="form-title">Reserve a Table</h3>

      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        min={today}
        required
        value={formData.date}
        onChange={handleChange}
      />
      {error && <p style={{ color: "red", marginTop: "0.4rem" }}>{error}</p>}

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        required
        value={formData.time}
        onChange={handleChange}
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        {occasions.map((occ) => (
          <option key={occ} value={occ}>
            {occ}
          </option>
        ))}
      </select>

      <button type="submit" disabled={!isValid}>
        Make Reservation
      </button>
    </form>
  );
}
