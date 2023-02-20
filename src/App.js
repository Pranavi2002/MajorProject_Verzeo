import React from "react";
import "./App.css";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <div class="text-center p-3" style={{ backgroundColor: "black" }}>
        <p className="footer">© 2022 Copyright: Kolipaka V N S Sai Pranavi</p>
      </div>
    </div>
  );
}

export default App;
