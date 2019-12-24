import React from "react";
import { getStockTagList, fetchStocksByTag } from "./api/stocks";

function App() {
  return (
    <div className="App">
      <h1>Pop Smoke Hackathon</h1>
      <button onClick={() => fetchStocksByTag('Trucking')}>Fetch Stock Sectors</button>
    </div>
  );
}

export default App;


