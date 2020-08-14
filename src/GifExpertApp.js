import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);

  /*const handlerAdd = (e) => {
    setCategories([...categories, "Caballeros del Zodiaco"]);
  };*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category}>
            {category}
          </GifGrid>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
