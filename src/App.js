import styles from "./App.module.css";
import Landing from "./pages/landing";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Router>
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
