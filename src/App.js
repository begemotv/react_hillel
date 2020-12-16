import React from "react";

import MainScreen from "./components/main-screen/main-screen";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import './App.css';

function App() {
  return (
    <div class="app__grid">
        <div className="header__app">
            <Header />
        </div>
        <div className="main__app">
            <MainScreen />
        </div>
        <div className="footer__app">
            <Footer />
        </div>
        <div className="nav__app">
            <Navbar />
        </div>
   </div>
  );
}

export default App;
