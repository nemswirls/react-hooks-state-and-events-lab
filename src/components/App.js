import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDarkMode, setIsDarkMode] = useState(false)

const toggleDarkMode = () => {
  setIsDarkMode(prevMode => !prevMode)
} 

  return (
    <div className={isDarkMode ? 'App dark' : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
         {isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
