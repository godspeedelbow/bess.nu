import React, { useState } from "react";

export const AuthenticationContext = React.createContext();

export function AuthenticationProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(hasToken());

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function hasToken() {
  return !!sessionStorage.getItem("token");
}
