import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log("Form Submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block mb-4">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
