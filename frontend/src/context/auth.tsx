import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

interface UserDataProps {
  children: any;
}

function AuthProvider({ children }: UserDataProps){
  return(
    <AuthContext.Provider value={{ nameTeste: "Teste" }}>
      { children }
    </AuthContext.Provider>
  )
};

export default AuthProvider;