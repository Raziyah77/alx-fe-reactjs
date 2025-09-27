import React from "react";

export default function UserProfile() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-6 text-center">
        {/* Profile Image with hover scaling */}
        <img
          className="w-32 h-32 rounded-full mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://via.placeholder.com/150"
          alt="User profile"
        />

        {/* Username with hover text color */}
        <h2 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-500">
          Jane Doe
        </h2>

        {/* Bio / Description */}
        <p className="text-gray-600 mt-2">
          Frontend Developer passionate about React, Tailwind CSS, and UX design.
        </p>
      </div>
    </div>
  );
}
