import * as React from "react";
import { useContext } from "react";
import { ProductContext } from "../RouteSwitch";
import { CartContext } from "../RouteSwitch";

const StorePage = () => {
  const products = useContext(ProductContext);
  const cartContext = useContext(CartContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome to the store
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.products.map((product) => (
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
                      <span aria-hidden="true" className="absolute inset-10" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <button
                onClick={() =>
                  cartContext.cartDispatch({
                    type: "ADD_TO_CART",
                    payload: { id: product.id, quantity: 1 },
                  })
                }
                className="mt-4 block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
