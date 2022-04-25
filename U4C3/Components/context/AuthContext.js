import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try{
        let res=await fetch("https://reqres.in/api/login", {
          method:"POST",
          headers:{"content-type":"application/json"},
          body:{
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          }
        });
        console.log(res)
        let logData=await res.json();
       setToken(logData)
    }
    catch(e)
    {
      console.log(e)
    }

  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
