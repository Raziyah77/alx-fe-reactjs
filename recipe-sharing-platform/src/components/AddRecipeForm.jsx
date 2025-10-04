import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error as user types
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Please enter at least one ingredient.";
    else if (formData.ingredients.split(",").length < 2)
      newErrors.ingredients = "Include at least two ingredients (comma-separated).";
    if (!formData.steps.trim())
      newErrors.steps = "Please enter preparation steps.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // valid if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("New Recipe:", formData);
      setSuccessMessage("✅ Recipe added successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-50 to-orange-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Recipe
        </h2>

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-400" : "focus:ring-orange-400"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-400" : "focus:ring-orange-400"
            }`}
            placeholder="e.g. Flour, Eggs, Milk"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="4"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.steps ? "border-red-400" : "focus:ring-orange-400"
            }`}
            placeholder="Describe how to prepare the recipe"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
        >
          Submit Recipe
        </button>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-center mt-4 font-medium">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddRecipeForm;
