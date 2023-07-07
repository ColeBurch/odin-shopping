import * as React from "react";
import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import Footer from "../components/Footer";

const App = () => {
  return (
    <main className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
      <Header />
      <FrontPage />
      <Footer />
    </main>
  );
};

export default App;
