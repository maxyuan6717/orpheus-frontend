import styles from "./App.module.css";
import Landing from "./pages/landing";
import TeamPage from "./pages/team";
import StoryPage from "./pages/story";
import FAQPage from "./pages/faq";
import Register from "./pages/register";
import Interested from "./pages/interested";
import NavMenu from "./components/menu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./common/typography.css";
import "./common/structure.css";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { GA_id } from "./util/base";

ReactGA.initialize(GA_id);

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

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
    <Router>
      <NavMenu />
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
        <MyRoute exact path="/register">
          <Register />
        </MyRoute>
        <MyRoute exact path="/interested">
          <Interested />
        </MyRoute>
        <MyRoute path="/">
          <Landing />
        </MyRoute>
      </Switch>
    </Router>
  );
}

export default App;
