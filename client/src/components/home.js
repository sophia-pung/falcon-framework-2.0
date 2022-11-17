import "./home.css";
import BackgroundGrid from "./backgroundgrid";
import network from "../icons/network.svg";
import timeline from "../icons/timeline.svg";
import profile from "../icons/profile.svg";
import Signup from "./singup";
import { React, useState, useEffect } from "react";
import { Router, Route, Routes, Link, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./authentication-button";
import NetworkPage from "./networkPage";
import Timeline from "./timeline";

const saveUser = (user) => {
    //will need to change to deployed version
    return fetch("localhost:8080/api/me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
}

function Home() {
    const { loginWithRedirect } = useAuth0();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

      const onSubmit = (()=>{
        if(!isLoggedIn){
            console.log("Test")
            loginWithRedirect();
            setIsLoggedIn(true);
        }
      })
  return (
    <div>
    <div className="body">
      {/* <nav>
        <div className="nav-container">
          <div className="icon">
            <a className="profile" href="">
              <img width="50px" src={profile} />
            </a>
            <a className="network" href="">
              <img width="50px" src={network} />
            </a>
            <a className="timeline" href="">
              <img width="50px" src={timeline} />
            </a>
          </div>
          <div classNmae="login-box">
            <Signup />
          </div>
          <div className="title-text">
            <h1>FALCON FRAMEWORK</h1>
          </div>
          <AuthenticationButton />
        </div>
      </nav> */}
      <div className="background">
        <BackgroundGrid />
      </div>
    </div>
    </div>
  );
}

export default Home;
