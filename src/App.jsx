import "./App.css";
import { Switch } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            HOme
          </Route>
          <Route path="/about">About</Route>
          <Route path="/dashboard">Dashboard</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
