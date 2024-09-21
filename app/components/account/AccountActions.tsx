"use client";

import { useState } from "react";

export default function AccountActions() {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteAccount = () => {
    setIsConfirming(true);
  };

  const handleConfirmDelete = () => {
    // API call to delete the account
    alert("Account deleted successfully.");
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
        Account Actions
      </h2>
      <div className="text-center">
        {!isConfirming ? (
          <button
            onClick={handleDeleteAccount}
            className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition ease-in-out duration-150"
          >
            Delete Account
          </button>
        ) : (
          <div>
            <p className="text-red-600 mb-6 font-medium">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition ease-in-out duration-150"
              >
                Confirm
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition ease-in-out duration-150"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



/*"use client";

import { useState } from "react";

export default function AccountActions() {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteAccount = () => {
    setIsConfirming(true);
  };

  const handleConfirmDelete = () => {
    // API call to delete the account
    alert("Account deleted successfully.");
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold text-red-600">Account Actions</h2>
      <div className="mt-4">
        {!isConfirming ? (
          <button
            onClick={handleDeleteAccount}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete Account
          </button>
        ) : (
          <div>
            <p className="text-red-600 mb-4">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mr-2"
            >
              Confirm
            </button>
            <button
              onClick={handleCancelDelete}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
  */
