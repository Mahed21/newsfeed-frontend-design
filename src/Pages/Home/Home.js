import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Story from "./Story";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="parent pt-4 pb-4">
        <div className="container">
          <Story></Story>
        </div>
      </div>
    </div>
  );
};

export default Home;
