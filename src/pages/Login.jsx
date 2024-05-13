import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setUserName, userName, setUserEmail, setAccessToken } =
    useUserContext();
  const [error, setError] = useState("");





  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setAccessToken(tokenResponse.access_token);

      try {
        const userInfo = await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          })
          .then((res) => res.data);

        const updateUserName = userInfo.name;
        const updateUserEmail = userInfo.email;

        setUserName(updateUserName);
        setUserEmail(updateUserEmail);

        navigate("/user-profile");
      } catch (err) {
        console.error("Failed to fetch user info");
        console.log(err);
      }
    },

    onError: (error) => {
      setError("Google login failed! Please try again. ");
      console.log(error);
    },
  });

  return (
    <div className="flex items-center justify-center h-screen " >
      <div className="flex flex-col items-center justify-center w-5/6 gap-10 border border-gray-200 shadow-xl lg:w-4/6 h-4/5 rounded-xl">
        <h1 className="text-3xl font-semibold text-center text-pumpkin">
          Please Login with Google
        </h1>
        {userName ? (
          <button
            className="flex items-center gap-2 p-2 font-semibold border rounded-md border-pumpkin"
            onClick={() => navigate("/user-profile")}
          >
            <span>Hello {userName}</span> <FcGoogle />
          </button>
        ) : (
       <button className="flex items-center gap-2 p-2 font-semibold border rounded-md border-pumpkin" onClick={googleLogin} >
         
          
            <span>Sign in with Google</span> <FcGoogle />
          </button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
