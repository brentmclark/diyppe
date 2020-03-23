import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import PatternOne from "./pages/pattern-1";
import CrowdsourcingSheet from "./pages/crowdsourcing-sheet";

export default function App() {
  return (
    <Router>
      <PageContainer>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <NavSectionHeader>Face Masks</NavSectionHeader>
            <li>
              <Link to="/pattern-1">Pattern 1</Link>
            </li>
            <li>
              <a
                href="https://freesewing.org/docs/patterns/fu/instructions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pattern 2
              </a>
            </li>
            <NavSectionHeader>Face Shields</NavSectionHeader>
            <li>
              <a
                href="https://blog.prusaprinters.org/from-design-to-mass-3d-printing-of-medical-shields-in-three-days/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prusa Blog
              </a>
            </li>
            <NavSectionHeader>3D Printing</NavSectionHeader>
            <li>
              <Link to="/crowdsourcing-sheet">Crowdsourcing Sheet</Link>
            </li>
          </ul>
        </Nav>
        <BodyContainer>
          <Switch>
            <Route path="/crowdsourcing-sheet">
              <CrowdsourcingSheet />
            </Route>
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
  max-width: 900px;
`;

const NavSectionHeader = styled.li`
  padding: 10px 0;
  margin: 10px 0 0;
  border-top: 1px solid #ccc;
`;
