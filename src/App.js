import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Social } from "./components/Social";
import { SocialSidebar } from "./components/SocialSidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="left-side">
          <SocialSidebar />
        </div>
        <div className="right-side">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default App;
