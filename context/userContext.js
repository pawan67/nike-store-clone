import { createContext, useContext, useState } from "react";
const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [fetchedData, setData] = useState({ title: "Not available" });
  const contextValue = { menu, setMenu, fetchedData, setData };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
