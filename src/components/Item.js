import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  function addToCart() {
    setInCart((inCart) => !inCart)
  }

  let cartStatus = inCart ? "in-cart" : ""
  let color = inCart ? "remove" : "add"

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={color} onClick={addToCart}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
