import "./home.css";
import { React, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GraphvisPage from "./graphVis";

function NetworkPage({updateGraphPage, setUpdateGraphPage}) {
  return (
      <GraphvisPage updateGraphPage={updateGraphPage} setUpdateGraphPage={setUpdateGraphPage}/>
  );
}

export default NetworkPage
