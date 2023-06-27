import * as React from "react";
import Header from "../components/Header";
import MainBox from "../components/MainBox";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
      <Header />
      <div>This is from App</div>
      <MainBox />
      <Footer />
    </div>
  );
};

export default App;
