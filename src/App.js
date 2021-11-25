import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </nav>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
