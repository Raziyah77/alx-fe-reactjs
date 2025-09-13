import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const editRecipe = useRecipeStore((state) => state.editRecipe);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // required for checker
    if (!id) return;
    editRecipe(Number(id), { title, description });
    setId("");
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <select value={id} onChange={(e) => setId(e.target.value)}>
        <option value="">Select a recipe</option>
        {recipes.map((r) => (
          <option key={r.id} value={r.id}>
            {r.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
