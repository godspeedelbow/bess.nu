import { useCallback, useContext } from "react";

import { AuthenticationContext } from "../components";

export default function useAuthentication() {
  const { isAuthenticated, setAuthenticated } = useContext(
    AuthenticationContext
  );

  const logIn = useCallback(
    (token) => {
      storeToken(token);
      setAuthenticated(true);
    },
    [setAuthenticated]
  );
  const logOut = useCallback(() => {
    removeToken();
    setAuthenticated(false);
  }, [setAuthenticated]);

  return {
    isAuthenticated,
    logIn,
    logOut,
  };
}

function storeToken(isAuthenticated) {
  sessionStorage.setItem("token", isAuthenticated);
}

function removeToken() {
  sessionStorage.removeItem("token");
}
