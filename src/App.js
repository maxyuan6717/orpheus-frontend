import styles from "./App.module.css";
import Landing from "./pages/landing";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import Dashboard from "./pages/dashboard";
import DayPage from "./pages/day";
import Register from "./pages/register";
import Login from "./pages/login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import "./common/burger.css";
import "./common/typography.css";
// import { ReactComponent as burger_icon } from "./assets/burger.svg";
import burger_icon from "./assets/burger.svg";

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

function App() {
  const MyRoute = ({ children, ...otherProps }) => {
    return (
      <Route {...otherProps}>
        <div className={styles.container}>
          <div className={styles.inner}>{children}</div>
        </div>
      </Route>
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <Menu
          disableAutoFocus
          itemListElement="div"
          customBurgerIcon={<img src={burger_icon} />}
        >
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">Our Story</StyledNavLink>
          <StyledNavLink to="/">Dashboard</StyledNavLink>
        </Menu>
        <Switch>
          <MyRoute exact path="/about">
            <AboutPage />
          </MyRoute>
          <MyRoute exact path="/faq">
            <FAQPage />
          </MyRoute>
          <MyRoute exact path="/register">
            <Register />
          </MyRoute>
          <MyRoute exact path="/login">
            <Login />
          </MyRoute>
          <MyRoute exact path="/:id">
            <Dashboard />
          </MyRoute>
          <MyRoute exact path="/:id/:day_no">
            <DayPage />
          </MyRoute>
          <MyRoute path="/">
            <Landing />
          </MyRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
