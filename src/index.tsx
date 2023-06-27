import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import MainBox from "./components/MainBox";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
        <Header />
        <MainBox />
        <Footer />
      </div>
    );
  }
}

root.render(<App />);
