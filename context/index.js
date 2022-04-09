import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  let sharedState = {
    adminLoggedIn,
    setAdminLoggedIn,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}