import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday"
  });

  const isValid =
    formData.date &&
    formData.time &&
    formData.guests >= 1 &&
    formData.guests <= 10;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      dispatch({ date: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formData);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Table booking form">
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        required
        onChange={handleChange}
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        required
        onChange={handleChange}
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
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
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isValid}>
        Make Reservation
      </button>
    </form>
  );
}
