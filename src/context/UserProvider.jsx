import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accessToken, setAccessToken] = useState("");



  return <UserContext.Provider value={{userName, setUserName,userEmail, setUserEmail,accessToken, setAccessToken}} >
    {children}
  </UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
