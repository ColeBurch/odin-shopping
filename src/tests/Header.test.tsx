import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders header", async () => {
  render(<Header />);

  await screen.findByRole("heading");

  expect(screen.getByRole("heading").textContent).toBe("Shopping");
});
