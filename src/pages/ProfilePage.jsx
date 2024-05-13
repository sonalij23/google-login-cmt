import React from "react";
import { useUserContext } from "../context/UserProvider";
import LogoutBtn from "../components/LogoutBtn";


const ProfilePage = () => {
  const { userName, userEmail, accessToken} = useUserContext();



  return (
    <div className="flex items-center justify-center h-screen">
       <div className="flex flex-col items-center justify-center w-5/6 gap-10 border border-gray-200 shadow-xl lg:w-4/6 h-4/5 rounded-xl">
      <h1 className="text-5xl font-semibold text-center">
        Hi <span className="text-pumpkin">{userName}</span>
      </h1>
      <p className="text-sm text-gray-400">{userEmail}</p>
      <p className="text-lg font-semibold">Welcome to Clone My Trips</p>
      <LogoutBtn/>
    </div>

    </div>
  );
};

export default ProfilePage;
