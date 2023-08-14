import { useState } from "react";
import "./App.css";

import NavBar from "./components/Header/Navbar";
import Banner from "./components/Home/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Home/Counter/Counter";
import Artist from "./components/Home/Artists/Artist";

function App() {
  return (
    <>
      <div className="topDiv">
        <NavBar />
        <Banner/>
      </div>
      <div className="topDiv">
        <Counter/>
        <Artist/>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
