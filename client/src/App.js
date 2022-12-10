import "./App.css";
import NavBar from "./components/nav-bar";
import Students from "./components/students";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import {Router, Route, Routes, Link, Switch, createBrowserRouter, RouterProvider} from "react-router-dom";
import GraphvisPage from "./components/graphVis";
import Home from "./components/home";
import "./fonts/GlowBetter-jEeLO 2.ttf";
import Login from "./components/login-button";
import Signup from "./components/singup";
import Timeline from "./components/timeline";
import NetworkPage from "./components/networkPage";
import network from "./icons/network.svg";
import timeline from "./icons/timeline.svg";
import profile from "./icons/profile.svg";
import AuthenticationButton from "./components/authentication-button";
import { useState } from 'react';

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  const [updateGraphPage, setUpdateGraphPage] = useState(false);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="body">
      {/* <Students /> */}
      <nav>
        <div className="nav-container">
          <div className="icon">
            <a className="profile" href="http://localhost:3000/profile">
              <img width="50px" src={profile} />
            </a>
            <a className="network" href="http://localhost:3000/network-page">
              <img width="50px" src={network} />
            </a>
            <a className="timeline" href="http://localhost:3000/timeline">
              <img width="50px" src={timeline} />
            </a>
          </div>
          {/* <div classNmae="login-box">
            <Signup />
          </div> */}
          <div className="title-text">
            <a href="http://localhost:3000">FALCON FRAMEWORK</a>
          </div>
          <AuthenticationButton />
        </div>
      </nav>
      <div className="background">
        {/* <BackgroundGrid /> */}
      <div>
      <Routes>
      <Route path="/" element={<Students user={user}/>} />
      <Route path="api/me" element={<Profile user={user} />} />
      </Routes>
      </div>
    </div>
    <div>
      <Routes>
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/network-page" element={<NetworkPage updateGraphPage={updateGraphPage} setUpdateGraphPage={setUpdateGraphPage}/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile setUpdateGraphPage={setUpdateGraphPage}/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;

// import * as React from "react";
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>Basic Example</h1>

//       <p>
//         This example demonstrates some of the core features of React Router
//         including nested <code>&lt;Route&gt;</code>s,{" "}
//         <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
//         "*" route (aka "splat route") to render a "not found" page when someone
//         visits an unrecognized URL.
//       </p>

//       {/* Routes nest inside one another. Nested route paths build upon
//             parent route paths, and nested route elements render inside
//             parent route elements. See the note about <Outlet> below. */}
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="dashboard" element={<Dashboard />} />

//           {/* Using path="*"" means "match anything", so this route
//                 acts like a catch-all for URLs that we don't have explicit
//                 routes for. */}
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }
