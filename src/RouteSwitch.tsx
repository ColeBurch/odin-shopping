import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Store from "./pages/Store";
const ShirtImage = require("./images/shirtImage.jpg");
const PantsImage = require("./images/pantsImage.jpg");
const ShoeImage = require("./images/shoeImage.jpg");
const hatImage = require("./images/hatImage.jpg");
const watchImage = require("./images/watchImage.jpg");

export const ProductContext = React.createContext({ products: [] });

const RouteSwitch = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: ShirtImage,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Pants",
      href: "#",
      imageSrc: PantsImage,
      imageAlt: "Front of men's Basic Pants in blue.",
      price: "$55",
      color: "Blue",
    },
    {
      id: 3,
      name: "Basic Shoes",
      href: "#",
      imageSrc: ShoeImage,
      imageAlt: "Side profile of Basic Shoe in white.",
      price: "$50",
      color: "White",
    },
    {
      id: 4,
      name: "Basic Hat",
      href: "#",
      imageSrc: hatImage,
      imageAlt: "Basic Hat in earth.",
      price: "$20",
      color: "Earth",
    },
    {
      id: 5,
      name: "Basic Watch",
      href: "#",
      imageSrc: watchImage,
      imageAlt:
        "Watch with white face, brown leather band, stainless steel hardware.",
      price: "$180",
      color: "White",
    },
  ];

  return (
    <ProductContext.Provider value={{ products: products }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default RouteSwitch;
