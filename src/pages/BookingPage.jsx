import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const updateTimes = (state, action) => {
  return fetchAPI(action.date);
};

const initializeTimes = () => fetchAPI(new Date());

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}
