import styles from "./App.module.css";
import Landing from "./pages/landing";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import Welcome from "./pages/welcome";
import DayPage from "./pages/day";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./common/typography.css";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Router>
            <Switch>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/faq" component={FAQPage} />
              <Route exact path="/:id" component={Welcome} />
              <Route exact path="/:id/:day_no" component={DayPage} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
