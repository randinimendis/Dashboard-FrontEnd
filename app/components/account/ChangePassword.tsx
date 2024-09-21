"use client";

import { useState } from "react";

export default function ChangePassword() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Add validation and API call to update password
    alert("Password updated successfully!");
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-cyan-700 text-center mb-6">
        Change Password
      </h2>
      <div className="space-y-4">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Enter current password"
            value={passwordData.currentPassword}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={passwordData.newPassword}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={passwordData.confirmPassword}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 mt-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition ease-in-out duration-150"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}


/*"use client";

import { useState } from "react";

export default function ChangePassword() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Add validation and API call to update password
    alert("Password updated successfully!");
  };

  return (
    <div className="p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold text-cyan-700">Change Password</h2>
      <div className="mt-4">
        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={passwordData.currentPassword}
          onChange={handleInputChange}
          className="block border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={passwordData.newPassword}
          onChange={handleInputChange}
          className="block border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={passwordData.confirmPassword}
          onChange={handleInputChange}
          className="block border p-2 w-full mb-2"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}
*/