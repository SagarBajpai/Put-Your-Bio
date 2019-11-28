import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import SignUp from "./Screens/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
