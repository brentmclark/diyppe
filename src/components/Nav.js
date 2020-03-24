import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Icon from "./Icon";

export default function Nav(props) {
  return (
    <NavContainer>
      <StyledIcon
        type="close"
        onClick={e => {
          document.querySelector("body").classList.remove("nav--open");
        }}
      />
      <NavMenu>
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
        <li>
          <Link to="/fabric-holder">Fabric Holder</Link>
        </li>
        <NavSectionHeader>Other Resources</NavSectionHeader>
        <li>
          <Link to="/twitter-accounts">Twitter Accounts</Link>
        </li>
      </NavMenu>
    </NavContainer>
  );
}

const NavSectionHeader = styled.li`
  padding: 10px 0;
  margin: 10px 0 0;
  border-top: 1px solid #ccc;
`;

const NavContainer = styled.nav`
  height: 100vh;
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 16px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  transform: translateX(-100%);
  background: #fff;
  z-index: 1000;

  .nav--open & {
    transform: translateX(0);
  }

  @media (min-width: 1000px) {
    transform: translateX(0);
  }
`;

const NavMenu = styled.ul``;

const StyledIcon = styled(Icon)`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 8px;
  right: 8px;

  @media (min-width: 1000px) {
    display: none;
  }
`;
