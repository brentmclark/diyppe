import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TweetEmbed from "react-tweet-embed";

import Home from "./pages/home";
import PatternOne from "./pages/pattern-1";
import CrowdsourcingSheet from "./pages/crowdsourcing-sheet";
import TwitterAccounts from "./pages/twitter-accounts";
import Nav from "./components/Nav";
import Icon from "./components/Icon";

export default function App() {
  return (
    <Router>
      <NavBar>
        <StyledIcon
          type="hamburger"
          onClick={e => {
            document.querySelector("body").classList.toggle("nav--open");
          }}
        />
      </NavBar>
      <PageContainer>
        <Nav />
        <BodyContainer>
          <Switch>
            <Route path="/twitter-accounts">
              <TwitterAccounts />
            </Route>
            <Route path="/fabric-holder">
              <TweetEmbed id="1241801897561989120" />
            </Route>
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

const PageContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  overflow: auto;
  padding: 30px;
  max-width: 900px;

  @media (min-width: 1000px) {
    padding-left: 230px;
  }
`;

const NavBar = styled.div`
  background: #000;
  height: 40px;
  width: 100%;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  height: 40px;
  width: 40px;
  fill: white;
`;
