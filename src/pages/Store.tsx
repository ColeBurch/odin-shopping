import * as React from "react";
import Header from "../components/Header";
import MainBox from "../components/MainBox";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
      <Header />
      <div>This is from Store</div>
      <MainBox />
      <Footer />
    </div>
  );
};

export default Store;
