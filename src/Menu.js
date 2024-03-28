import React from "react";
import Pizza from "./Pizza";
import pizzaData from "./data";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our store oven, all organic , all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza key={pizza.name} pizzaObj={pizza} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>
          We're still working on our menu.Please come back later or Order Online
        </p>
      )}
    </main>
  );
}
export default Menu;
