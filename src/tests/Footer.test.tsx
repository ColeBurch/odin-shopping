import * as React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { container } from "webpack";

test("Footer renders correct text", async () => {
  render(<Footer />);

  await screen.getByText("Made by Cole Burch");

  expect(screen.getByText("Made by Cole Burch").textContent).toBe(
    "Made by Cole Burch"
  );
});

test("GitHub link is correct", async () => {
  render(<Footer />);

  await screen.findByRole("link");

  expect(screen.getByRole("link").getAttribute("href")).toBe(
    "https://github.com/ColeBurch"
  );
});
