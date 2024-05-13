import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const { accessToken, setUserName, setUserEmail } = useUserContext();

  const handleLogout = async () => {
    try {
      await revokeGoogleTokens(accessToken);

      setUserName("");
      setUserEmail("");

      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const revokeGoogleTokens = async (accessToken) => {
    const revokeUrl = "https://accounts.google.com/o/oauth2/revoke";

    try {
      const response = await axios.get(revokeUrl, {
        params: {
          token: accessToken,
        },
      });

      if (response.status === 200) {
        console.log("Token revoked successfully");
      } else {
        console.error("Failed to revoke token:", response.data);
        throw new Error("Token revocation failed");
      }
    } catch (error) {
      console.error("Error revoking token:", error);
      throw error;
    }
  };
  return (
    <button
      className="p-2 text-white bg-blue-300 rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
