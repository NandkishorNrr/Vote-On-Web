import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="root" className="app">
      <Header className="header" />
      <Outlet className="outlet" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
