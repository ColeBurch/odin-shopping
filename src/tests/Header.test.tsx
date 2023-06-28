import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders header", async () => {
  render(<Header />);

  expect(screen.getByText("Product")).toBeDefined();
  expect(screen.getByText("Marketplace")).toBeDefined();
  expect(screen.getByText("Company")).toBeDefined();
});

test("renders header links", async () => {
  render(<Header />);

  expect(screen.getByText("Marketplace").getAttribute("href")).toBe("/store");
  expect(screen.getByText("Company").getAttribute("href")).toBe("#");
});

test("renders header logo", async () => {
  render(<Header />);

  expect(screen.getByTestId("logo-button").getAttribute("href")).toBe("/");
});

test("renders cart button", async () => {
  render(<Header />);

  expect(screen.getByTestId("cart-button").getAttribute("href")).toBe("/cart");
});
