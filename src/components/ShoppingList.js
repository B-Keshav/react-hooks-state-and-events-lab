import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterValue, setFilterValue] = useState("All")

  function foodFilter(e) {
    setFilterValue(e.target.value)
  }

  const newFoods = items.filter((food) => {
    if (filterValue === "All") {
      return true
    }
    else {
      return food.category === filterValue
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={foodFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newFoods.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
