import styles from "./App.module.css";
import Landing from "./pages/landing";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import Dashboard from "./pages/dashboard";
import DayPage from "./pages/day";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./common/burger.css";

import "./common/typography.css";

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
        <Menu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </Menu>
        <Switch>
          <MyRoute exact path="/about">
            <AboutPage />
          </MyRoute>
          <MyRoute exact path="/faq">
            <FAQPage />
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
