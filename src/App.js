import { useState } from "react";
import "./App.css";

import { AddCategory } from "./components/AddCategory/AddCategory";
import { StickersGrid } from "./components/StikersGrid/StickersGrid";
import { ParticleBg } from "./components/Particle/ParticleBg";

function App() {
  const [categories, setcategories] = useState(["Stikers"]);

  return (
    <div className="App">
      <header>
        <h1>StickersApp</h1>
        <AddCategory setcategories={setcategories} />
      </header>
      <ParticleBg />
      <ol>
        {categories.map((item) => (
          <StickersGrid item={item} key={item} />
        ))}
      </ol>
    </div>
  );
}

export default App;
