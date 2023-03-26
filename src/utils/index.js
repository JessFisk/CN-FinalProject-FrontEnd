export const logout = (e, setUser,) => { //other setStates like recipe etc?
    e.preventDefault();
  
    setUser(null);
    // other useStates go here
  
    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  