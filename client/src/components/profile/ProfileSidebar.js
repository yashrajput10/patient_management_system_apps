import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaLock, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const ProfileSidebar = () => {
    const [profileData, setProfileData] = useState(null);
    const [image, setImage] = useState(null);   
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null); 

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/admin/getadmin", {
                    method: "GET",
                    credentials: "include",
                });
                if (!response.ok) throw new Error("Failed to fetch admin data");
                const data = await response.json();
                setProfileData(data);
            } catch (err) {
                console.error("Error fetching profile data:", err.message);
            }
        };

        fetchAdminData();
    }, []);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        uploadImage(selectedImage); // Automatically upload the image
    };

    const uploadImage = async (selectedImage) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", selectedImage);
        formData.append("firstname", profileData.firstname);
        formData.append("lastname", profileData.lastname);

        try {
            const response = await fetch("http://localhost:5000/admin/update", {
                method: "PATCH",
                body: formData,
                credentials: "include",
            });
            const result = await response.json();
            if (response.ok) {
                setProfileData(result.data); // Update profileData with new data
            } else {
                console.error("Error updating profile:", result.msg);
            }
        } catch (err) {
            console.error("Error during image upload:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleImageClick = () => {
        // Trigger the click event on the hidden file input
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col items-center">
                <img
                    src={profileData?.imageUrl || "https://via.placeholder.com/100"} // Dummy image
                    alt="Profile"
                    className="w-24 h-24 mb-4 rounded-full cursor-pointer" // Added cursor pointer for clickability
                    onClick={handleImageClick} // Handle click on image
                />
                <h2 className="text-xl font-semibold">
                    {profileData?.firstname ? `${profileData.firstname} ${profileData.lastname}` : "Loading..."}
                </h2>
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
                ref={fileInputRef} // Attach the ref to the file input
                style={{ display: "none" }} // Hide the input
            />

            <div className="mt-8">
                <h3 className="mb-4 text-lg font-medium text-gray-700">Menu</h3>

                <ul className="space-y-4">
                    {/* Profile Link */}
                    <li className="flex items-center bg-gray-200 rounded-md">
                        <NavLink
                            to="/userprofile"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue font-medium rounded-md px-3 py-2 flex items-center text-decoration-none"
                                    : "text-black font-medium px-3 py-2 flex items-center text-decoration-none"
                            }
                        >
                            <FaUser className="mr-2" />
                            <span className="hidden md:inline">Profile</span>
                        </NavLink>
                    </li>

                    {/* Change Password Link */}
                    <li className="flex items-center bg-gray-200 rounded-md">
                        <NavLink
                            to="/Profile/chnagepassword"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue font-medium rounded-md px-3 py-2 flex items-center text-decoration-none"
                                    : "text-black font-medium px-3 py-2 flex items-center text-decoration-none"
                            }
                        >
                            <FaLock className="mr-2" />
                            <span className="hidden md:inline">Change Password</span>
                        </NavLink>
                    </li>

                    {/* Terms & Conditions Link */}
                    <li className="flex items-center bg-gray-200 rounded-md">
                        <NavLink
                            to="/Profile/termsandconditions"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue font-medium rounded-md px-3 py-2 flex items-center text-decoration-none"
                                    : "text-black font-medium px-3 py-2 flex items-center text-decoration-none"
                            }
                        >
                            <FaFileAlt className="mr-2" />
                            <span className="hidden md:inline">Terms & Conditions</span>
                        </NavLink>
                    </li>

                    {/* Privacy Policy Link */}
                    <li className="flex items-center bg-gray-200 rounded-md">
                        <NavLink
                            to="/Profile/privacypolicy"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue font-medium rounded-md px-3 py-2 flex items-center text-decoration-none"
                                    : "text-black font-medium px-3 py-2 flex items-center text-decoration-none"
                            }
                        >
                            <FaShieldAlt className="mr-2" />
                            <span className="hidden md:inline">Privacy Policy</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSidebar;
