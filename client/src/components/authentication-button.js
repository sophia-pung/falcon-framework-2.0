import React from 'react';
import "./authentication-button.js"
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

let PORT = process.env.PORT;
if (!PORT) {
  PORT = "http://localhost:8000"
}

const saveUser = (user) => {
    return fetch(PORT + "/api/me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
}

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(()=>{
    if(isAuthenticated){
        saveUser(user);
    }
  }, [isAuthenticated, user]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;