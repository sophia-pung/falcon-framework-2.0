import "./home.css";
import network from "../icons/network.svg";
import timeline from "../icons/timeline.svg";
import profile from "../icons/profile.svg";
import { React, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./authentication-button";

// const saveUser = (user) => {
//     //will need to change to deployed version
//     return fetch("localhost:8080/api/me", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     })
// }

function Timeline() {
    // const { loginWithRedirect } = useAuth0();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    //   const onSubmit = (()=>{
    //     if(!isLoggedIn){
    //         console.log("Test")
    //         loginWithRedirect();
    //         setIsLoggedIn(true);
    //     }
    //   })
  return (
    <h1>timeline</h1>
  );
}

export default Timeline;
