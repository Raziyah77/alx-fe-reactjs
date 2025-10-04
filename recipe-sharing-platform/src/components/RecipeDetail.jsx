import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Step 1: Prepare all ingredients.</li>
            <li>Step 2: Cook according to recipe instructions.</li>
            <li>Step 3: Serve and enjoy!</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
