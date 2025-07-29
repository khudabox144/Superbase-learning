import React, { useState } from "react";
import { Authcontext } from "./Authcontext";
import supabase from "../config/supabaseClient";
// import { error } from "console";

const AuthProvider = ({ children }) => {
  // const [email, setUserEmail] = useState("");
  const [userEmail , setUserEmail]=useState("");
  //get the current user 
const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    return null;
  }
  return data?.user?.email;
}

getCurrentUser().then(email => setUserEmail(email));


// const getUserEmail = async () => {
//   const { data, error } = await supabase.auth.getUser();
//   if (error) {
//     console.error(error);
//     return null;
//   }
//   console.log(data.user.email);
//   return data.user.email;
// };

// getUserEmail();




// Sign Up
const createUser = (email, password) => {
  return supabase.auth.signUp({ email, password });
};

// Login
const loginUser = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

// Logout
const handleLogout = () => {
  return supabase.auth.signOut().then(() => setUserEmail(""));
};

const userInfo = {
  userEmail,
  createUser,
  loginUser,
  handleLogout,
  setUserEmail
};

return (
  <Authcontext.Provider value={userInfo}>
    {children}
  </Authcontext.Provider>
);
};

export default AuthProvider;
