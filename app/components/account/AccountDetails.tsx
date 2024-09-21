"use client";

import { useState } from "react";

export default function AccountDetails() {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: "Vidusha Sanidu",
    email: "vidushasanidu@gmail.com",
    userImage: "user.jpg",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-cyan-700 text-center mb-6">
        Account Details
      </h2>
      <div className="flex flex-col items-center">
        <img
          src={userData.userImage}
          alt="User Image"
          className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-cyan-500"
        />
        <div className="w-full mt-4">
          {editMode ? (
            <>
              {/* Username Input */}
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Username"
              />

              {/* Email Input */}
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Email"
              />

              {/* Image Upload */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Profile Image
              </label>
              <input
                type="file"
                name="userImage"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const newImage = URL.createObjectURL(e.target.files[0]);
                    setUserData((prevState) => ({
                      ...prevState,
                      userImage: newImage,
                    }));
                  }
                }}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
              />

              {/* Save Button */}
              <button
                onClick={handleEditToggle}
                className="w-full mt-6 px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition ease-in-out duration-150"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <p className="text-lg font-medium text-gray-700 mb-2 text-center">
                {userData.username}
              </p>
              <p className="text-md text-gray-500 mb-4 text-center">
                {userData.email}
              </p>
              <button
                onClick={handleEditToggle}
                className="w-full mt-4 px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition ease-in-out duration-150"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


/*"use client";

import { useState } from "react";

export default function AccountDetails() {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: "Vidusha sanidu",
    email: "vidushasanidu@gmail.com",
    userImage: "user.jpg",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold text-cyan-700">Account Details</h2>
      <div className="flex items-center mt-4">
        <img
          src={userData.userImage}
          alt="User Image"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          {editMode ? (
            <>
             
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="block border p-2 w-full mb-2"
                placeholder="Username"
              />

               
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="block border p-2 w-full mb-2"
                placeholder="Email"
              />
              {editMode && (
            <>
               
                <label className="block text-sm font-medium text-gray-700">Upload Profile Image</label>
                <input
                  type="file"
                  name="userImage"
                  onChange={(e) => {
                    // Here you can handle the image upload logic
                    if (e.target.files && e.target.files[0]) {
                      const newImage = URL.createObjectURL(e.target.files[0]);
                      setUserData((prevState) => ({ ...prevState, userImage: newImage }));
                    }
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
                />
                <br></br>
              </>
            )}
                
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">{userData.username}</p>
              <p className="text-sm text-gray-500">{userData.email}</p>
              <button
                onClick={handleEditToggle}
                className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
*/

