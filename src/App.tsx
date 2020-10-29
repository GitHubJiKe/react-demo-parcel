import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";
import routes from "./routes";
import "./style.scss";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="app-root">
        <Header>
          <h1 style={{ color: "#fff" }}>React App with Parcel</h1>
        </Header>
        <Content>
          <Switch>
            {routes().map((route, index) => (
              <Route {...route} key={index} />
            ))}
            <Redirect to="/page1" />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}
