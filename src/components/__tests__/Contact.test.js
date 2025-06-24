import Contact from "../Contact";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

test("Contact component should render", () => {
  render(<Contact />);
  const contactElement = screen.getByText("Contact Us");
  expect(contactElement).toBeInTheDocument();
});