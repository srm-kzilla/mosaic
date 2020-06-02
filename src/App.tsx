import React from "react";

import CreatePalette from "./components/CreatePalette";
import TrendingPalette from "./components/TrendingPalette";
import Store from "./utils/context/Store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Store>
        <CreatePalette />
        <TrendingPalette />
      </Store>
    </div>
  );
}

export default App;
