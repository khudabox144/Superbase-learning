import React, { useState } from "react";
import { Authcontext } from "./Authcontext";
import supabase from "../config/supabaseClient";

const AuthProvider = ({ children }) => {
  const [email, setUserEmail] = useState("");

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
    email,
    createUser,
    loginUser,
    handleLogout,
  };

  return (
    <Authcontext.Provider value={userInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
