import styles from "./App.module.css";
import Landing from "./pages/landing";
import TeamPage from "./pages/team";
import StoryPage from "./pages/story";
import FAQPage from "./pages/faq";
import Dashboard from "./pages/dashboard";
import DayPage from "./pages/day";
import Register from "./pages/register";
import Login from "./pages/login";
import NavMenu from "./components/menu";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./common/typography.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) setUser(userId);
  }, []);

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
        <NavMenu user={user} />
        <Switch>
          <MyRoute exact path="/team">
            <TeamPage />
          </MyRoute>
          <MyRoute exact path="/story">
            <StoryPage />
          </MyRoute>
          <MyRoute exact path="/faq">
            <FAQPage />
          </MyRoute>
          <MyRoute exact path="/:id/register">
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
