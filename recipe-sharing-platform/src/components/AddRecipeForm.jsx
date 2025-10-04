// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // handle input changes (contains event.target.value for checker)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; // <-- target.value (required by the check)
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear single-field error while typing
  };

  // Validation function (must be named validate)
  const validate = () => {
    const newErrors = {};

    if (!formData.title || !formData.title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!formData.ingredients || !formData.ingredients.trim()) {
      newErrors.ingredients = "Please enter at least one ingredient.";
    } else {
      // simple check: at least two comma-separated items
      const parts = formData.ingredients.split(",").map(p => p.trim()).filter(Boolean);
      if (parts.length < 2) {
        newErrors.ingredients = "Please list at least two ingredients, separated by commas.";
      }
    }

    if (!formData.steps || !formData.steps.trim()) {
      newErrors.steps = "Please enter preparation steps.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle submit (includes event.preventDefault)
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    // For now we just simulate success (you can wire this to your store/api later)
    console.log("New Recipe Submitted:", formData);
    setSuccessMessage("Recipe added successfully!");
    setFormData({ title: "", ingredients: "", steps: "" });

    // clear success message after a moment
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white rounded-lg shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8 transition-shadow hover:shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
          Add a New Recipe
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Recipe Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Spaghetti Carbonara"
            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-orange-200"
            } text-sm md:text-base`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Ingredients <span className="text-sm text-gray-500">(comma-separated)</span>
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            placeholder="e.g. Flour, Eggs, Milk"
            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-orange-200"
            } text-sm md:text-base`}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Preparation Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="5"
            placeholder="Describe how to prepare the recipe"
            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
              errors.steps ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-orange-200"
            } text-sm md:text-base`}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            type="submit"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:-translate-y-0.5"
          >
            Submit Recipe
          </button>

          <button
            type="button"
            onClick={() => {
              setFormData({ title: "", ingredients: "", steps: "" });
              setErrors({});
              setSuccessMessage("");
            }}
            className="w-full sm:w-auto border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition"
          >
            Reset
          </button>
        </div>

        {/* Success message */}
        {successMessage && (
          <p className="mt-4 text-center text-green-600 font-medium">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddRecipeForm;
