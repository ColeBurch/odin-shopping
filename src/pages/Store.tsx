import * as React from "react";
import Header from "../components/Header";
import StorePage from "../components/StorePage";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
      <Header />
      <StorePage />
      <Footer />
    </div>
  );
};

export default Store;
