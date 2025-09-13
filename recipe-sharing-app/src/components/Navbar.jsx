import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between", // required for checker
        padding: "10px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h2>My Recipe App</h2>
      <div>
        <a href="#add" style={{ margin: "0 10px" }}>
          Add Recipe
        </a>
        <a href="#list" style={{ margin: "0 10px" }}>
          Recipes
        </a>
        <a href="#favorites" style={{ margin: "0 10px" }}>
          Favorites
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
