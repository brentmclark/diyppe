import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import PatternOne from "./pages/pattern-1";

export default function App() {
  return (
    <Router>
      <PageContainer>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pattern-1">Pattern 1</Link>
            </li>
          </ul>
        </Nav>
        <BodyContainer>
          <Switch>
            <Route path="/pattern-1">
              <PatternOne />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BodyContainer>
      </PageContainer>
    </Router>
  );
}

const Nav = styled.nav`
  height: 100vh;
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 16px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
`;

const PageContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  padding: 30px;
  overflow: scroll;
  padding: 0 0 0 230px;
`;
