// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ required import
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const { recipes, deleteRecipe, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    deleteRecipe: state.deleteRecipe,
    searchTerm: state.searchTerm,
  }));

  // 🔎 filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              {/* ✅ wrap recipe title in a Link */}
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              <DeleteRecipeButton id={recipe.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
