import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Content from "./Components/Content/Content";
import RightBar from "./Components/RightBar/RightBar";

function App() {
  function iOS() {
    return ["iPhone", "iphone", "IPHONE"].includes(navigator.platform);
  }

  const platform = iOS();

  return (
    <div className={platform ? "iphone" : "App"}>
      <RightBar />
      <BrowserRouter>
        <Switch>
          <Route
            path="/insta"
            component={() => {
              window.location.href = "https://www.instagram.com/soulpudding";
              return null;
            }}
          />
          <Route
            path="/about"
            component={() => <About iphone={platform} />}
          ></Route>
          <Route
            path="/"
            exact
            component={() => <Content iphone={platform} />}
          ></Route>
        </Switch>
      </BrowserRouter>
      {/* <Content /> */}
    </div>
  );
}

export default App;
