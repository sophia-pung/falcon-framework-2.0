import "./App.css";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import { Route, Routes, Link} from "react-router-dom";
import Home from "./components/home";
import "./fonts/GlowBetter-jEeLO 2.ttf";
import Timeline from "./components/timeline";
import NetworkPage from "./components/networkPage";
import network from "./icons/network.svg";
import timeline from "./icons/timeline.svg";
import profile from "./icons/profile.svg";
import AuthenticationButton from "./components/authentication-button";
import { useState } from 'react';

let PORT = process.env.PORT;
if (!PORT) {
  PORT = "http://localhost:3000"
}

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
            <Link className="profile" to={PORT + "/profile"}>
              <img width="50px" src={profile} />
            </Link>
            <Link className="network" to={PORT + "/network-page"}>
              <img width="50px" src={network} />
            </Link>
            <Link className="timeline" to={PORT + "/timeline"}>
              <img width="50px" src={timeline} />
            </Link>
          </div>
          <div className="title-text">
            <Link to={PORT + "/"}>FALCON FRAMEWORK</Link>
          </div>
          <AuthenticationButton />
        </div>
      </nav>
      <div className="background">
      <div>
      <Routes>
      <Route path={PORT + "api/me"} element={<Profile user={user} />} />
      </Routes>
      </div>
    </div>
    <div>
      <Routes>
        <Route path={PORT + "/timeline"} element={<Timeline/>} />
        <Route path={PORT + "/network-page"} element={<NetworkPage updateGraphPage={updateGraphPage} setUpdateGraphPage={setUpdateGraphPage}/>} />
        <Route path={PORT + "/"} element={<Home/>} />
        <Route path={"/"} element={<Home/>} />
        <Route path={PORT + "/profile"} element={<Profile setUpdateGraphPage={setUpdateGraphPage}/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;