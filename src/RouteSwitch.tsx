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
export const CartContext = React.createContext(null);

type cartStateType = {
  id: number;
  quantity: number;
}[];

type cartAction = {
  type: string;
  payload: {
    id: number;
    quantity: number;
  };
};

const cartInitialState: cartStateType = [];
const reducer = (state: cartStateType, action: cartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.some((item) => item.id === action.payload.id)) {
        const stateIndex = state.findIndex(
          (item) => item.id === action.payload.id
        );
        const newState = [...state];
        newState[stateIndex].quantity += 0.5;
        return newState;
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_FROM_CART":
      return state;
    case "CLEAR_CART":
      return cartInitialState;
    default:
      return state;
  }
};

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

  const [cart, dispatch] = React.useReducer(reducer, cartInitialState);

  React.useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      parsedCart.forEach((item: any) => {
        dispatch({
          type: "ADD_TO_CART",
          payload: { id: item.id, quantity: item.quantity },
        });
      });
    }
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <ProductContext.Provider value={{ products: products }}>
      <CartContext.Provider value={{ cartState: cart, cartDispatch: dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default RouteSwitch;
