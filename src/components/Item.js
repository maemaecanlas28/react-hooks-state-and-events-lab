import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false)

  function handleAddToCart () {
    setAddToCart((addToCart) => !addToCart);
  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleAddToCart}
        className={addToCart ? "in-cart" : ""}>
          {addToCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
