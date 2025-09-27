import React from "react";

export default function UserProfile() {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-gray-100 p-8 sm:p-4 md:p-8 my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="text-center">
        {/* Profile Image with responsive sizing + hover scaling */}
        <img
          className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://via.placeholder.com/150"
          alt="User profile"
        />

        {/* Username with blue color, margin, responsive typography, and hover color */}
        <h2 className="text-lg md:text-xl font-semibold text-blue-800 my-4 transition-colors duration-300 hover:text-blue-500">
          Jane Doe
        </h2>

        {/* Bio / Description with responsive text */}
        <p className="text-sm md:text-base text-gray-600">
          Frontend Developer passionate about React, Tailwind CSS, and UX design.
        </p>
      </div>
    </div>
  );
}
