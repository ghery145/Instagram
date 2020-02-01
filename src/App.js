import React from "react";
import "./App.css";
import MainContent from "./MainContent";
import Header from "./Header/Header";

function App() {
  return (
    // App == body
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
