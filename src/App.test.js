import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders booking form labels", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
});
