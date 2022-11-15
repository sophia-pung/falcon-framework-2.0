import "./home.css";
import BackgroundGrid from "./backgroundgrid";
import network from "../icons/network.svg";
import timeline from "../icons/timeline.svg";

function Home() {
  return (
    <div className="body">
      <nav class="top">
        <div className="nav-container">
            <div className="icon">
                <a href=""><img width="50px" src={network}/ ></a>
            </div>
            <div className="title-text">
                <h1>FALCON FRAMEWORK</h1>
            </div>
                <a className="add-timeline" href=""><img width="50px" src={timeline}/ ></a>
        </div>
      </nav>
      <BackgroundGrid/>
    </div>
  );
}

export default Home;
