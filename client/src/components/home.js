import "./home.css";
import BackgroundGrid from "./backgroundgrid";
import { React } from "react";

function Home() {
  return (
    <div>
    <div className="body">
      <div className="background">
        <BackgroundGrid />
      </div>
    </div>
    </div>
  );
}

export default Home;
