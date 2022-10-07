import "./app.scss";
import Home from "./componets/pages/home/Home";
import Register from "./componets/pages/register/Register";
import Login from "./componets/pages/login/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Watch from "./componets/pages/watch/Watch";

function App() {
  const user = false;

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/register">
            {!user ? <Register /> : <Home />}
          </Route>
          <Route exact path="/login">
            {!user ? <Login /> : <Home />}
          </Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movies" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
