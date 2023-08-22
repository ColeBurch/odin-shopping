import * as React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
const CoffeeSVG = require("../images/coffee.svg");
const ShirtSVG = require("../images/shirt.svg");
const PantSVG = require("../images/pants.svg");
const ShoeSVG = require("../images/shoe.svg");
const HatSVG = require("../images/hat.svg");
const WatchSVG = require("../images/watch.svg");
import { CartContext } from "../RouteSwitch";
import { ProductContext } from "../RouteSwitch";

type cartProductType = {
  id: number;
  quantity: number;
};

const products = [
  {
    name: "Shirts",
    description: "The basis of every great outfit",
    href: "#",
    icon: ShirtSVG,
  },
  {
    name: "Pants",
    description: "Can't leave home without them",
    href: "#",
    icon: PantSVG,
  },
  {
    name: "Shoes",
    description: "Your feet will thank you",
    href: "#",
    icon: ShoeSVG,
  },
  {
    name: "Hats",
    description: "For the sun and the cold",
    href: "#",
    icon: HatSVG,
  },
  {
    name: "Accessories",
    description: "The finishing touches",
    href: "#",
    icon: WatchSVG,
  },
];
const callsToAction = [
  { name: "See it in action", href: "#", icon: PlayCircleIcon },
  { name: "Contact support", href: "#", icon: PhoneIcon },
];

function classNames(...classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartContext = React.useContext(CartContext);
  const [cartPreviewOpen, setCartPreviewOpen] = React.useState(false);
  const productContext = React.useContext(ProductContext);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5" data-testid="logo-button">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={CoffeeSVG} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img className="h-8 w-auto" src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/store"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="text-sm font-semibold leading-6 text-gray-900 flex"
            data-testid="cart-button"
            onClick={() => setCartPreviewOpen(true)}
          >
            <ShoppingCartIcon className="h-7 w-auto flex-none" />
            <div>
              {cartContext.cartState.reduce(
                (accumulator: number, item: any) => accumulator + item.quantity,
                0
              )}
            </div>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={CoffeeSVG} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/store"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <button className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                  <ShoppingCartIcon
                    className="h-7 w-auto flex-none"
                    aria-hidden="true"
                    onClick={() => setCartPreviewOpen(true)}
                  />
                  <div>
                    {cartContext.cartState.reduce(
                      (accumulator: number, item: any) =>
                        accumulator + item.quantity,
                      0
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Transition.Root show={cartPreviewOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setCartPreviewOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setCartPreviewOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartContext.cartState.map(
                                (cartProduct: cartProductType) => (
                                  <li
                                    key={cartProduct.id}
                                    className="flex py-6"
                                  >
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={
                                          productContext.products.find(
                                            (product) =>
                                              product.id === cartProduct.id
                                          )?.imageSrc
                                        }
                                        alt={
                                          productContext.products.find(
                                            (product) =>
                                              product.id === cartProduct.id
                                          )?.imageAlt
                                        }
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a
                                              href={
                                                productContext.products.find(
                                                  (product) =>
                                                    product.id ===
                                                    cartProduct.id
                                                )?.href
                                              }
                                            >
                                              {
                                                productContext.products.find(
                                                  (product) =>
                                                    product.id ===
                                                    cartProduct.id
                                                )?.name
                                              }
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            $
                                            {
                                              productContext.products.find(
                                                (product) =>
                                                  product.id === cartProduct.id
                                              )?.price
                                            }
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {
                                            productContext.products.find(
                                              (product) =>
                                                product.id === cartProduct.id
                                            )?.color
                                          }
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Qty {cartProduct.quantity}
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              cartContext.cartDispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: {
                                                  id: cartProduct.id,
                                                  quantity: 1,
                                                },
                                              })
                                            }
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>
                            $
                            {cartContext.cartState.reduce(
                              (accumulator: number, item: any) =>
                                accumulator +
                                item.quantity *
                                  productContext.products.find(
                                    (product) => product.id === item.id
                                  )?.price,
                              0
                            )}
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setCartPreviewOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Header;
