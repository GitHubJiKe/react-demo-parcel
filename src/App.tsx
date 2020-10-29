import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components";
import routes from "./routes";
import "./style.scss";

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header>React App with Parcel</Header>
        <Switch>
          {routes().map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/page1" />
        </Switch>
      </div>
    </Router>
  );
}
