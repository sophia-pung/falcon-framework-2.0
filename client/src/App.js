import "./App.css";
import NavBar from "./components/nav-bar";
import Students from "./components/students";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import { Route, Routes, Link } from 'react-router-dom';
import GraphvisPage from './components/graphVis';
import Home from "./components/home";
import "./fonts/GlowBetter-jEeLO\ 2.ttf";

function App() {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Home />
      <GraphvisPage/>
    </div>
  );
}

export default App;
