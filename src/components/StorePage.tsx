import * as React from "react";
const ShirtImage = require("../images/shirtImage.jpg");
const PantsImage = require("../images/pantsImage.jpg");
const ShoeImage = require("../images/shoeImage.jpg");
const hatImage = require("../images/hatImage.jpg");
const watchImage = require("../images/watchImage.jpg");

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

const StorePage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome to the store
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
