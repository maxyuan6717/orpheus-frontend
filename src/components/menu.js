import { useState } from "react";
import "../common/burger.css";
import burger_icon from "../assets/burger.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { AppUrl } from "../util/base";

const StyledNavLink = styled(NavLink)`
  color: var(--primary);
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding: 5px 0px 5px 20px;
  transition: background-color 0.3s;

  &:hover {
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
      <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/"
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/story"
      >
        Our Story
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/team"
      >
        Team
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/survey"
      >
        Phone Usage Quiz
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          window.location.href = `${AppUrl}/`;
        }}
        to="/"
      >
        My Dashboard
      </StyledNavLink>
      {/* <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/register"
      >
        Register
      </StyledNavLink> */}
      {/* <StyledNavLink
        onClick={() => {
          setOpen(false);
        }}
        to="/interested"
      >
        Beta Sign-Up
      </StyledNavLink> */}
    </Menu>
  );
};

export default NavMenu;
