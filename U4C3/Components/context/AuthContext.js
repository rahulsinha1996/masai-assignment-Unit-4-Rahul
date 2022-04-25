import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  console.log(token)

  const handleLogin = async (email,password) => {
    try{
        let res=await fetch("https://reqres.in/api/login", {
          method:"POST",
          headers:{"content-type":"application/json"},
          body:{
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          }
        });
       
        let logData=await res.json();
       setToken(...token,logData)
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
