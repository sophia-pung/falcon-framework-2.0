import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./logout-button.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      id="border"
      className="border btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;