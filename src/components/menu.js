import { useState } from "react";
import "../common/burger.css";
import burger_icon from "../assets/burger.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";
import { AppUrl } from "../util/base";

const StyledLink = styled.div`
  color: var(--primary);
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 5px 0px 5px 20px;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--primary);
    text-decoration: none;
    background-color: rgb(75, 75, 75);
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const handleStateChange = (state) => {
    setOpen(state.isOpen);
  };

  return (
    <Menu
      disableAutoFocus
      itemListElement="div"
      customBurgerIcon={<img src={burger_icon} />}
      isOpen={open}
      onStateChange={handleStateChange}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <StyledLink
          onClick={() => {
            setOpen(false);
          }}
        >
          Home
        </StyledLink>
      </NavLink>
      <NavLink to="/story" style={{ textDecoration: "none" }}>
        <StyledLink
          onClick={() => {
            setOpen(false);
          }}
          to="/story"
        >
          Our Story
        </StyledLink>
      </NavLink>
      <NavLink to="/team" style={{ textDecoration: "none" }}>
        <StyledLink
          onClick={() => {
            setOpen(false);
          }}
          to="/team"
        >
          Team
        </StyledLink>
      </NavLink>
      <NavLink to="/survey" style={{ textDecoration: "none" }}>
        <StyledLink
          onClick={() => {
            setOpen(false);
          }}
          to="/survey"
        >
          Phone Usage Quiz
        </StyledLink>
      </NavLink>
      <StyledLink
        onClick={() => {
          window.location.href = `${AppUrl}/`;
        }}
        to="/"
      >
        My Dashboard
      </StyledLink>

      {/* <StyledLink
        onClick={() => {
          setOpen(false);
        }}
        to="/register"
      >
        Register
      </StyledLink> */}
      {/* <StyledLink
        onClick={() => {
          setOpen(false);
        }}
        to="/interested"
      >
        Beta Sign-Up
      </StyledLink> */}
    </Menu>
  );
};

export default NavMenu;
